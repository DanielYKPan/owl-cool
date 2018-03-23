/**
 * game.service
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromMemory from './index';
import * as GameActions from './game.actions';
import { Tile } from './tile.model';

@Injectable()
export class GameService {

    private tileToCheck: Tile = null;
    private tileToCheckIds: string[] = [];

    private _startTimer$ = new Subject<boolean>();
    get startTimer$(): Observable<boolean> {
        return this._startTimer$.asObservable();
    }

    constructor( private store: Store<fromMemory.MemoryState> ) {
    }

    public newGame(): void {
        this.store.dispatch(new GameActions.BuildTiles());
        this._startTimer$.next(true);
    }

    public coverAllTiles(): void {
        this.store.dispatch(new GameActions.CoverAllTiles());
    }

    public revealTile( tile: Tile ): boolean {
        if (tile.revealed || this.tileToCheckIds.length >= 2) {
            return false;
        }

        this.tileToCheckIds.push(tile.id);
        this.store.dispatch(new GameActions.FlipTiles({ids: [tile.id], state: true}));
        if (this.tileToCheck === null) {
            this.tileToCheck = tile;
            return false;
        } else {
            return true;
        }
    }

    public checkMatch( tile: Tile ): void {
        if (!this.tileToCheck) {
            return;
        }

        if (this.tileToCheck.content !== tile.content) {
            this.store.dispatch(new GameActions.FlipTiles({ids: this.tileToCheckIds, state: false}));
        }

        this.tileToCheck = null;
        this.tileToCheckIds = [];
    }
}
