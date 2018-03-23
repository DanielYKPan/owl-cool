/**
 * index
 */

import * as fromGame from './game.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface MemoryState {
    game: fromGame.State;
}

export const reducers: ActionReducerMap<MemoryState> = {
    game: fromGame.reducer,
};

export const getMemoryState = createFeatureSelector<MemoryState>('memory');

export const getGameState = createSelector(
    getMemoryState,
    (state: MemoryState) => state.game
);

export const getTiles = createSelector(
    getGameState,
    fromGame.getTiles
);

export const getMoves = createSelector(
    getGameState,
    fromGame.getMoves
);
