/**
 * index
 */

import * as fromGame from './game.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Tile } from './tile.model';

export interface PuzzleState {
    game: fromGame.State;
}

export const reducers: ActionReducerMap<PuzzleState> = {
    game: fromGame.reducer,
};

export const getPuzzleState = createFeatureSelector<PuzzleState>('puzzle');

export const getGameState = createSelector(
    getPuzzleState,
    ( state: PuzzleState ) => state.game
);

export const getSelectedPhoto = createSelector(
    getGameState,
    fromGame.getSelectedPhoto
);

export const getGameSize = createSelector(
    getGameState,
    fromGame.getGameSize,
);

export const getTiles = createSelector(
    getGameState,
    fromGame.getTiles
);

export const getGameStats = createSelector(
    getTiles,
    ( tiles: Tile[] ) => {

        let gameWon = true;
        let gameOver = true;
        if (tiles.length === 0) {
            gameWon = false;
            gameOver = true;
        } else {
            for (const t of tiles) {
                if (t.value !== t.position) {
                    gameWon = false;
                    gameOver = false;
                    break;
                }
            }
        }

        return {gameWon, gameOver};
    }
);
