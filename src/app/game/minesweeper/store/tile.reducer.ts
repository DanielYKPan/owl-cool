/**
 * tile.reducer
 */
import { Tile } from './tile.model';
import { TileActions, TileActionTypes } from './tile.actions';
import { shuffle } from '../../share/utils';

export interface GameStats {
    gameWon: boolean;
    gameOver: boolean;
    flags: number;
}

export interface GameLevel {
    name: string;
    width: number;
    height: number;
    mines: number;
}

export interface State {
    selectedLevel: GameLevel;
    tiles: Tile[];
}

export const GameLevels: GameLevel[] = [
    {name: 'junior', width: 8, height: 8, mines: 10},
    {name: 'senior', width: 16, height: 16, mines: 40},
    {name: 'master', width: 30, height: 16, mines: 99}
];

const TraversalPaths = [
    {x: -1, y: -1},
    {x: 0, y: -1},
    {x: 1, y: -1},
    {x: -1, y: 0},
    {x: 1, y: 0},
    {x: -1, y: 1},
    {x: 0, y: 1},
    {x: 1, y: 1}
];

const initialState: State = {
    selectedLevel: GameLevels[0],
    tiles: [],
};

/* Change coordination to index */
const coordinationToIndex = ( coordination: { x: number, y: number }, width: number ): number => {
    return coordination.x + coordination.y * width;
};

/* Transform index to coordination */
const indexToCoordination = ( index: number, width: number ): { x: number; y: number } => {
    const x = index % width;
    const y = (index - x) / width;

    return {x, y};
};

const buildTileGrid = ( level: GameLevel ): Tile[] => {
    const tiles: Tile[] = [];
    const nonMineTileNum = level.width * level.height -
        level.mines;

    for (let i = 0; i < nonMineTileNum; i++) {
        const tile = new Tile();
        tiles.push(tile);
    }

    for (let i = 0; i < level.mines; i++) {
        const tile = new Tile('mine');
        tiles.push(tile);
    }

    return tiles;
};

const setTilesContent = ( tiles: Tile[], gameLevel: GameLevel ): Tile[] => {
    tiles.map(( tile: Tile, index: number ) => {

        // Set the tile coordination based on its index in the tiles array
        tile.Coordination = indexToCoordination(index, gameLevel.width);

        // check if the tile content is mine,
        // If it is not a mine, calculate the mines surrounding the tile and set its number
        if (tile.Content !== 'mine') {
            let surroundingMines = 0;
            getNeighbourTiles(tile, tiles, gameLevel, ( t: Tile ) => {
                if (t.Content === 'mine') {
                    surroundingMines++;
                }
            });
            tile.Content = surroundingMines ? surroundingMines.toString() : null;
        }
    });
    return tiles;
};

/*
 * Get a tile's surrounding tiles
 * */
const getNeighbourTiles = ( tile: Tile, tiles: Tile[], gameLevel: GameLevel, cb: ( t: Tile ) => any ) => {
    for (const tp of TraversalPaths) {
        const neighbourX = tile.Coordination.x + tp.x;
        const neighbourY = tile.Coordination.y + tp.y;

        if (neighbourX >= 0 &&
            neighbourX < gameLevel.width &&
            neighbourY >= 0 &&
            neighbourY < gameLevel.height) {
            const position = coordinationToIndex({
                x: neighbourX,
                y: neighbourY
            }, gameLevel.width);

            cb(tiles[position]);
        }
    }
};

const hitNonMineTile = ( hitTile: Tile, tiles: Tile[], gameLevel: GameLevel ): Tile[] => {
    if (!hitTile.Revealed && !hitTile.Covered) {
        tiles = tiles.map(( tile: Tile ) => {
            return tile.Id === hitTile.Id ?
                Object.assign(new Tile(), tile, {revealed: true}) : tile;
        });

        if (hitTile.Content === null) {
            getNeighbourTiles(hitTile, tiles, gameLevel, ( t ) => {
                if (t.Content !== 'mine') {
                    tiles = hitNonMineTile(t, tiles, gameLevel);
                }
            });
        }
    }

    return tiles;
};

export function reducer( state = initialState, action: TileActions ): State {
    switch (action.type) {
        case TileActionTypes.BuildTiles:

            let newTiles = buildTileGrid(state.selectedLevel);
            newTiles = shuffle<Tile>(newTiles);
            newTiles = setTilesContent(newTiles, state.selectedLevel);

            return {
                ...state,
                tiles: newTiles
            };

        case TileActionTypes.RevealTile:
            return {
                ...state,
                tiles: state.tiles.map(( tile ) => {
                    return tile.Id === action.payload.Id ?
                        Object.assign(new Tile(), tile, {revealed: true}) : tile;
                })
            };

        case  TileActionTypes.RevealAllUncoveredTiles:
            return {
                ...state,
                tiles: state.tiles.map(( tile ) => {
                    return !tile.Revealed && !tile.Covered ?
                        Object.assign(new Tile(), tile, {revealed: true}) : tile;
                })
            };

        case TileActionTypes.HitTile:
            return {
                ...state,
                tiles: hitNonMineTile(action.payload, state.tiles, state.selectedLevel)
            };

        case TileActionTypes.HitMine:
            return {
                ...state,
                tiles: state.tiles.map(( tile ) => {
                    if (tile.Id === action.payload.Id) {
                        return Object.assign(new Tile(), tile, {revealed: true, content: 'mine-hit'});
                    } else {
                        if (tile.Content === 'mine' && !tile.Covered) {
                            return Object.assign(new Tile(), tile, {revealed: true});
                        } else if (tile.Content !== 'mine' && tile.Covered) {
                            return Object.assign(new Tile(), tile, {revealed: true, content: 'flag-wrong'});
                        } else {
                            return tile;
                        }
                    }
                })
            };

        case TileActionTypes.CoverTile:
            return {
                ...state,
                tiles: state.tiles.map(( tile ) => {
                    return tile.Id === action.payload.Id ?
                        Object.assign(new Tile(), tile, {covered: true}) : tile;
                })
            };

        case TileActionTypes.UncoverTile:
            return {
                ...state,
                tiles: state.tiles.map(( tile ) => {
                    return tile.Id === action.payload.Id ?
                        Object.assign(new Tile(), tile, {covered: false}) : tile;
                })
            };

        case TileActionTypes.SetLevel:
            if (state.selectedLevel.name === action.payload.name) {
                return state;
            }

            let newLevelTiles = buildTileGrid(action.payload);
            newLevelTiles = shuffle<Tile>(newLevelTiles);
            newLevelTiles = setTilesContent(newLevelTiles, action.payload);

            return {
                ...state,
                selectedLevel: action.payload,
                tiles: newLevelTiles
            };

        default:
            return state;
    }
}

export const getTiles = ( state: State ) => state.tiles;

export const getCoveredTiles = ( state: State ) => state.tiles.filter(( t: Tile ) => t.Covered);

export const getMines = ( state: State ) => state.tiles.filter(( t: Tile ) => t.Content === 'mine' || t.Content === 'mine-hit');

export const getSelectedLevel = ( state: State ) => state.selectedLevel;
