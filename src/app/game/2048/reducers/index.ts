/**
 * index
 */

import * as fromTile from './tile';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    tile: fromTile.State;
}

export const reducers: ActionReducerMap<State> = {
    tile: fromTile.reducer,
};

export const get2048State = createFeatureSelector<State>('2048');

export const getTileState = createSelector(
    get2048State,
    ( state: State ) => state.tile
);

export const getTiles = createSelector(
    getTileState,
    fromTile.getTiles
);

export const getGameStats = createSelector(
    getTileState,
    fromTile.getGameStats
);
