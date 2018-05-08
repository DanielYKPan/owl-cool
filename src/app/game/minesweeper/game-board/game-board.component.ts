import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, HostBinding } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromMinesweeper from '../store';
import { GameService } from '../service/game.service';
import { Observable } from 'rxjs';
import { Tile } from '../store/tile.model';
import { GameLevel, GameLevels } from '../store/tile.reducer';

@Component({
    selector: 'app-game-minesweeper-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameBoardComponent implements OnInit, OnDestroy {

    public tiles$: Observable<Tile[]>;

    public selectedLevel$: Observable<GameLevel>;

    public timer$: Observable<number>;

    public flags$: Observable<number>;

    public levels = GameLevels;

    public seconds = 0;

    @HostBinding('class.game-minesweeper-board')
    get gameMinesweeperBoardClass(): boolean {
        return true;
    }

    get bestRecord(): string {
        return this.gameService.best ?
            this.gameService.best + ' Sec' : null;
    }

    constructor( private store: Store<fromMinesweeper.MinesweeperState>,
                 private gameService: GameService ) {
    }

    ngOnInit() {
        this.timer$ = this.gameService.timer;

        this.tiles$ = this.store.pipe(select(fromMinesweeper.getTiles));

        this.flags$ = this.store.pipe(select(fromMinesweeper.getFlags));

        this.selectedLevel$ = this.store.pipe(select(fromMinesweeper.getSelectedLevel));

        this.newGame();
    }

    public ngOnDestroy(): void {
        this.gameService.unsubscribeGame();
    }

    public clickTile( tile: Tile, isRightClick = false ): void {
        isRightClick ?
            this.gameService.coverTile(tile) : this.gameService.revealTile(tile);
    }

    public changeGameLevel( level: GameLevel ): void {
        this.gameService.changeGameLevel(level);
    }

    private newGame() {
        this.gameService.newGame();
    }
}
