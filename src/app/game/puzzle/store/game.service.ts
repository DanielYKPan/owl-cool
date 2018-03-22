/**
 * game.service
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPuzzle from '../store';
import * as GameActions from '../store/game.actions';
import { Tile } from './tile.model';

@Injectable()
export class GameService {

    constructor( private store: Store<fromPuzzle.PuzzleState> ) {
    }

    public newGame(): void {
        this.store.dispatch(new GameActions.BuildTiles());
        return;
    }

    public moveTile( tile: Tile ): void {
        if (tile.isBlank) {
            return;
        }
        this.store.dispatch(new GameActions.MoveTile(tile));
    }
}
