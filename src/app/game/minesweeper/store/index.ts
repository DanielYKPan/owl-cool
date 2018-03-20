/**
 * index
 */

import * as fromTiles from './tile.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Tile } from './tile.model';
import { GameLevel, GameStats } from './tile.reducer';

export interface MinesweeperState {
    tiles: fromTiles.State;
}

export const reducers: ActionReducerMap<MinesweeperState> = {
    tiles: fromTiles.reducer,
};

export const getMinesweeperState = createFeatureSelector<MinesweeperState>('minesweeper');

export const getTilesState = createSelector(
    getMinesweeperState,
    ( state: MinesweeperState ) => state.tiles
);

export const getTiles = createSelector(
    getTilesState,
    fromTiles.getTiles
);

export const getCoveredTiles = createSelector(
    getTilesState,
    fromTiles.getCoveredTiles
);

export const getMines = createSelector(
    getTilesState,
    fromTiles.getMines
);

export const getSelectedLevel = createSelector(
    getTilesState,
    fromTiles.getSelectedLevel
);

export const getFlags = createSelector(
    getMines,
    getCoveredTiles,
    ( mines, coveredTiles ) => mines.length - coveredTiles.length
);

export const getGameStatus = createSelector(
    getMines,
    getFlags,
    ( mines, flags ): GameStats => {

        let coveredMines = 0;
        let gameOver = false;
        let gameWon = false;

        if (mines && mines.length) {
            for (const mine of mines) {
                if (mine.Revealed) {
                    gameOver = true;
                    break;
                } else if (!mine.Revealed && mine.Covered) {
                    coveredMines += 1;
                }
            }

            if (!gameOver && coveredMines === mines.length) {
                gameOver = true;
                gameWon = true;
            }
        }

        return {gameOver, gameWon, flags};
    }
);
