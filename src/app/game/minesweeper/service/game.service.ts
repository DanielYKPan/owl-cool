/**
 * game.service
 */

import { Injectable } from '@angular/core';
import { Tile } from '../store/tile.model';
import { select, Store } from '@ngrx/store';
import * as fromMinesweeper from '../store';
import * as TileActions from '../store/tile.actions';
import { GameLevel, GameStats } from '../store/tile.reducer';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { never as observableNever } from 'rxjs/observable/never';
import { interval as observableInterval } from 'rxjs/observable/interval';
import { of as observableOf } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';

enum GameTimerStatus {
    On,
    Off,
    Reset,
}

@Injectable()
export class GameService {

    private gameStats: GameStats;

    private started = false;

    private time = 0;

    private gameLevel: GameLevel;

    private tickTok = new Subject<GameTimerStatus>();

    private _timer = this.tickTok
        .pipe(
            startWith(GameTimerStatus.Reset),
            switchMap(( status: GameTimerStatus ) => {
                if (status === GameTimerStatus.Off) {
                    return observableNever();
                } else if (status === GameTimerStatus.Reset) {
                    this.time = 0;
                    return observableOf(this.time);
                } else {
                    return observableInterval(1000).map(() => this.time += 1);
                }
            }),
            map(( x: number ) => x),
        );

    get timer(): Observable<number> {
        return this._timer;
    }

    private _best: number;
    get best(): number {
        return this._best;
    }

    private gameStatsSub = Subscription.EMPTY;
    private gameLevelSub = Subscription.EMPTY;

    constructor( private store: Store<fromMinesweeper.MinesweeperState> ) {

        this.gameLevelSub = this.store.pipe(select(fromMinesweeper.getSelectedLevel))
            .subscribe(( level: GameLevel ) => {
                this.gameLevel = level;
                this._best = +localStorage.getItem(
                    'minesweeper-best-' + this.gameLevel.name
                ) || null;
            });

        this.gameStatsSub = this.store
            .pipe(
                select(fromMinesweeper.getGameStatus),
                distinctUntilChanged(( current: any, previous: any ) => {
                    return current.gameWon === previous.gameWon &&
                        current.gameOver === previous.gameOver &&
                        current.flags === previous.flags;
                })
            ).subscribe(( result: GameStats ) => {
                this.changeGameStats(result);
            });
    }

    public newGame(): void {
        this.store.dispatch(new TileActions.BuildTiles());
        this.resetTimer();
    }

    public changeGameLevel( level: GameLevel ): void {
        this.store.dispatch(new TileActions.SetLevel(level));
        this.resetTimer();
    }

    public changeGameStats( stats: GameStats ): void {
        this.gameStats = stats;

        if (this.gameStats.gameOver) {
            this.stopGameTimer();
        }

        if (this.gameStats.gameWon) {
            this.store.dispatch(new TileActions.RevealAllUncoveredTiles());
            this.setBestRecord(this.time);
        }
    }

    public revealTile( tile: Tile ): void {
        if (this.gameStats.gameOver || tile.Covered || tile.Revealed) {
            return;
        }

        if (!this.started) {
            this.startGameTimer();
        }

        // Hit a non-mine tile
        if (tile.Content === null || (tile.Content && tile.Content !== 'mine')) {
            this.store.dispatch(new TileActions.HitTile(tile));
            return;
        } else {
            this.store.dispatch(new TileActions.HitMine(tile));
        }
    }

    public coverTile( tile: Tile ): void {
        if (this.gameStats.gameOver || tile.Revealed) {
            return;
        }

        if (!this.started) {
            this.startGameTimer();
        }

        !tile.Covered && this.gameStats.flags > 0 ?
            this.store.dispatch(new TileActions.CoverTile(tile)) :
            this.store.dispatch(new TileActions.UncoverTile(tile));
    }

    public unsubscribeGame(): void {
        this.gameStatsSub.unsubscribe();
        this.gameLevelSub.unsubscribe();
    }

    private startGameTimer(): void {
        this.started = true;
        this.time = 0;
        this.tickTok.next(GameTimerStatus.On);
    }

    private stopGameTimer(): void {
        this.started = false;
        this.tickTok.next(GameTimerStatus.Off);
    }

    private resetTimer(): void {
        this.started = false;
        this.tickTok.next(GameTimerStatus.Reset);
    }

    /*
     * Store the best record into local storage
     * */
    private setBestRecord( time: number ): void {
        if (!this._best || time < this._best) {
            this._best = time;
            localStorage.setItem(
                'minesweeper-best-' + this.gameLevel.name,
                time.toString()
            );
        }
    }
}
