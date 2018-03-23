/**
 * game.reducer
 */
import { Tile } from './tile.model';
import { GameActions, GameActionTypes } from './game.actions';
import { shuffle } from '../../share/utils';

const GAME_SIZE = 9;

const ICONS: string[] = [
    'taxi', 'motorcycle', 'binoculars', 'bomb', 'anchor', 'rocket', 'balance-scale',
    'leaf', 'paper-plane', 'gavel', 'ship', 'train', 'fire-extinguisher', 'chess-rook',
    'shopping-basket', 'bath', 'microchip', 'snowflake', 'chess-queen', 'cogs',
    'heart', 'star', 'bell', 'trophy', 'bug'
];

export interface State {
    moves: number;
    tiles: Tile[];
}

const initialState: State = {
    moves: 0,
    tiles: []
};

const buildTiles = ( icons: string[] ): Tile[] => {
    const tiles: Tile[] = [];
    for (const icon of icons) {
        const tA = new Tile(icon);
        const tB = new Tile(icon);
        tiles.push(tA, tB);
    }

    return shuffle<Tile>(tiles);
};

export function reducer( state = initialState, action: GameActions ): State {

    switch (action.type) {

        case GameActionTypes.BuildTiles:
            const icons = shuffle<string>(ICONS).splice(0, GAME_SIZE);
            const tiles = buildTiles(icons);

            return {
                ...state,
                moves: 0,
                tiles: tiles
            };

        case GameActionTypes.CoverAllTiles:

            return {
                ...state,
                tiles: state.tiles.map(( tile: Tile ) => {
                    return Object.assign(new Tile(), tile, {revealed: false});
                })
            };

        case GameActionTypes.FlipTiles:

            let moves = state.moves;
            if (action.payload.state) {
                moves += 1;
            }

            return {
                ...state,
                moves,
                tiles: state.tiles.map(( tile: Tile ) => {
                    return action.payload.ids.indexOf(tile.id) > -1 ?
                        Object.assign(new Tile(), tile, {revealed: action.payload.state}) : tile;
                })
            };

        default:
            return state;
    }
}

export const getTiles = ( state: State ) => state.tiles;
export const getMoves = ( state: State ) => state.moves;
