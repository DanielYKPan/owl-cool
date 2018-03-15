/**
 * index
 */

import * as fromGrid from './grid';
import * as fromTile from './tile';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    grid: fromGrid.State;
    tile: fromTile.State;
}

export const reducers: ActionReducerMap<State> = {
    grid: fromGrid.reducer,
    tile: fromTile.reducer,
};

export const get2048State = createFeatureSelector<State>('2048');

export const getGridState = createSelector(
    get2048State,
    ( state: State ) => state.grid
);

export const getGridCells = createSelector(
    getGridState,
    fromGrid.getCells,
);

export const getTileState = createSelector(
    get2048State,
    ( state: State ) => state.tile
);

export const getTiles = createSelector(
    getTileState,
    fromTile.getTiles
);
