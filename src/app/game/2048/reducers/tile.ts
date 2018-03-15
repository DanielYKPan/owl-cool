/**
 * tile
 */
import { Tile } from '../tile.model';

export interface State {
    tiles: Tile[];
}

const initialState: State = {
    tiles: [],
};

export function reducer(state = initialState, actions: TileActions): State {

}

export const getTiles = (state: State) => state.tiles;
