/**
 * game.reducer
 */
import { GameActions, GameActionTypes } from './game.actions';
import { Tile } from './tile.model';
import { shuffle } from '../../share/utils';

export const GamePhotos: string [] = [
    'adriana.jpg',
    'cartoon1.jpg',
    'cartoon2.jpg',
    'cartoon3.jpg',
    'dog.jpg',
    'dog2.jpg',
    'romance.jpg',
    'tiger.jpg',
];

export interface State {
    selectedPhoto: string;
    gameSize: number;
    tiles: Tile[];
}

const initialState: State = {
    selectedPhoto: GamePhotos[0],
    gameSize: 3,
    tiles: []
};

const Vectors = [{x: -1, y: 0}, {x: 1, y: 0}, {x: 0, y: -1}, {x: 0, y: 1}];

/* Transform index to coordination */
export const positionToCoordination = ( index: number, size: number ): { x: number; y: number } => {
    const x = index % size;
    const y = (index - x) / size;

    return {x, y};
};

/** Check if a puzzle is solvable */
const isSolvable = ( arr: Tile[] ) => {
    let invCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j].value > arr[i].value) {
                invCount++;
            }
        }
    }

    return invCount % 2 === 0;
};

const buildTileGrid = ( gameSize: number ): Tile[] => {
    const tiles: Tile[] = [];
    const length = gameSize * gameSize;

    for (let i = 0; i < length; i++) {
        const isBlank = i === length - 1;
        const tile = new Tile(i, isBlank);
        tiles.push(tile);
    }

    return tiles;
};

const shuffleTileGrid = ( tiles: Tile[] ): Tile[] => {
    let shuffledTiles;
    do {
        shuffledTiles = shuffle<Tile>(tiles);
    } while (!isSolvable(shuffledTiles));

    shuffledTiles = shuffledTiles.map(( tile: Tile, index: number ) => {
        tile.position = index;
        return tile;
    });

    return shuffledTiles;
};

/* Check if the coordination is inside the grid */
const withinGrid = ( coordination: { x: number, y: number }, size: number ): boolean => {
    return coordination.x >= 0 && coordination.x < size &&
        coordination.y >= 0 && coordination.y < size;
};

const getNextPosition = ( coordination: { x: number, y: number }, size: number ): number => {
    // if the coordination is not in the game grid, return null
    if (!withinGrid(coordination, size)) {
        return null;
    }

    return coordination.x + coordination.y * size;
};

export function reducer( state = initialState, action: GameActions ): State {

    let newTiles;
    switch (action.type) {
        case GameActionTypes.SelectPhoto:
            return {
                ...state,
                selectedPhoto: GamePhotos[action.payload],
                tiles: []
            };

        case GameActionTypes.BuildTiles:
            newTiles = buildTileGrid(state.gameSize);
            newTiles = shuffleTileGrid(newTiles);
            return {
                ...state,
                tiles: newTiles
            };

        case GameActionTypes.MoveTile:
            const tile = action.payload;
            const tileCoordination = positionToCoordination(tile.position, state.gameSize);

            if (tile.isBlank) {
                return state;
            }

            for (const v of Vectors) {
                const nextCoordination = {x: tileCoordination.x + v.x, y: tileCoordination.y + v.y};
                const nextPosition = getNextPosition(nextCoordination, state.gameSize);
                const nextTile = state.tiles.find(( t ) => t.position === nextPosition);

                if (nextTile && nextTile.isBlank) {
                    return {
                        ...state,
                        tiles: state.tiles.map(( t ) => {
                            if (t.id === nextTile.id) {
                                return Object.assign(new Tile(), t, {position: tile.position});
                            } else if (t.id === tile.id) {
                                return Object.assign(new Tile(), t, {position: nextTile.position});
                            } else {
                                return t;
                            }
                        })
                    };
                }
            }
            return state;

        case GameActionTypes.ChangeGameSize:
            newTiles = buildTileGrid(action.payload);
            newTiles = shuffleTileGrid(newTiles);
            return {
                ...state,
                gameSize: action.payload,
                tiles: newTiles
            };

        default:
            return state;
    }
}

export const getSelectedPhoto = ( state: State ) => state.selectedPhoto;
export const getTiles = ( state: State ) => state.tiles;
export const getGameSize = ( state: State ) => state.gameSize;
