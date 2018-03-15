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

        case TileActionTypes.UpdateTile:
            const tiles = state.tiles.map(( tile ) => {
                if (action.payload.nextTile && tile.id === action.payload.nextTile.id) {
                    return Object.assign(new Tile(), tile, action.payload.nextTile);
                }

                if (tile.id === action.payload.oldTile.id) {
                    return Object.assign(new Tile(), tile, action.payload.oldTile,
                        {position: action.payload.newPosition});
                } else {
                    return tile;
                }
            });

            return {
                ...state,
                tiles
            };

        case TileActionTypes.DumpTiles:
            return {
                ...state,
                tiles: state.tiles.filter(( tile ) => !tile.shouldDump)
                    .map(( tile ) => {
                        return tile.merged ?
                            Object.assign(new Tile(), tile, {merged: false}) : tile;
                    })
            };

        default:
            return state;
    }
}

export const getTiles = ( state: State ) => state.tiles;
