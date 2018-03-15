/**
 * index
 */

import * as fromGame from './game-reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    game: fromGame.State;
}

export const reducers: ActionReducerMap<State> = {
    game: fromGame.reducer,
};

export const get2048State = createFeatureSelector<State>('2048');

export const getGameState = createSelector(
    get2048State,
    ( state: State ) => state.game
);

export const getTiles = createSelector(
    getGameState,
    fromGame.getTiles
);

export const getGameStats = createSelector(
    getGameState,
    fromGame.getGameStats
);
