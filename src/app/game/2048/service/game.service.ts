/**
 * game.service
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as from2048 from '../reducers';
import * as GridActions from '../actions/grid';

export const SIZE = 4;

@Injectable()
export class GameService {
    constructor( private store: Store<from2048.State> ) {
    }

    public newGame(): void {
        this.resetGameStatus();
        this.buildGameGrid();
    }

    private resetGameStatus() {
        // to be configured
    }

    private buildGameGrid(): void {
        this.store.dispatch(new GridActions.BuildGrid(SIZE));
    }
}
