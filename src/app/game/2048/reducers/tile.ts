/**
 * tile
 */
import { Tile } from '../tile.model';
import { GameActions, GameActionTypes } from '../actions/tile';

export interface State {
    gameOver: boolean;
    gameWon: boolean;
    scores: number;
    highestScores: number;
    tiles: Tile[];
}

const initialState: State = {
    gameOver: false,
    gameWon: false,
    scores: 0,
    highestScores: +localStorage.getItem('2048-best') || 0,
    tiles: [],
};

export function reducer( state = initialState, action: GameActions ): State {
    switch (action.type) {
        case GameActionTypes.ResetGame:
            return {
                ...state,
                gameWon: false,
                gameOver: false,
                scores: 0,
                tiles: []
            };

        case GameActionTypes.SetGameStats:
            return {
                ...state,
                gameOver: action.payload.gameOver,
                gameWon: action.payload.gameWon,
                scores: action.payload.scores,
                highestScores: action.payload.highestScores,
            };

        case GameActionTypes.AddTile:
            return {
                ...state,
                tiles: [...state.tiles, action.payload]
            };

        case GameActionTypes.UpdateTiles:
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

        case GameActionTypes.ResetTilesStatus:
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

export const getScores = ( state: State ) => state.scores;

export const getHighest = ( state: State ) => state.highestScores;

export const getOver = ( state: State ) => state.gameOver;

export const getGameStats = ( state: State ) => {
    return {
        gameOver: state.gameOver,
        gameWon: state.gameWon,
        scores: state.scores,
        highestScores: state.highestScores,
    };
};

