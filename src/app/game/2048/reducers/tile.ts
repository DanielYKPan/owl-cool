/**
 * tile
 */
import { Tile } from '../tile.model';
import { TileActions, TileActionTypes } from '../actions/tile';

export interface State {
    tiles: Tile[];
}

const initialState: State = {
    tiles: [],
};

export function reducer( state = initialState, action: TileActions ): State {
    switch (action.type) {
        case TileActionTypes.RestTile:
            return {
                tiles: []
            };

        case TileActionTypes.AddTile:
            return {
                ...state,
                tiles: [...state.tiles, action.payload]
            };

        default:
            return state;
    }
}

export const getTiles = ( state: State ) => state.tiles;
