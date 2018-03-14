/**
 * grid
 */
import { GridActions, GridActionTypes } from '../actions/grid';

export interface State {
    cells: string[];
}

const initialState: State = {
    cells: [],
};

export function reducer( state = initialState, action: GridActions ): State {
    switch (action.type) {
        case GridActionTypes.BuildGrid:
            const size = action.payload;

            return {
                cells: new Array(size * size)
            };

        default:
            return state;
    }
}

export const getCells = (state: State) => state.cells;
