/**
 * index
 */

import * as fromGrid from './grid';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    grid: fromGrid.State;
}

export const reducers: ActionReducerMap<State> = {
    grid: fromGrid.reducer,
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
