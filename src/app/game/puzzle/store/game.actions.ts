/**
 * game.actions
 */

import { Action } from '@ngrx/store';
import { Tile } from './tile.model';

export enum GameActionTypes {
    SelectPhoto = '[Puzzle] Select Photo',
    BuildTiles = '[Puzzle] Build Tiles',
    MoveTile = '[Puzzle] Move Tile',
    ChangeGameSize = '[Puzzle] Change Game Size',
}

export class SelectPhoto implements Action {
    readonly type = GameActionTypes.SelectPhoto;

    constructor( public payload: number ) {
    }
}

export class BuildTiles implements Action {
    readonly type = GameActionTypes.BuildTiles;
}

export class MoveTile implements Action {
    readonly type = GameActionTypes.MoveTile;

    constructor( public payload: Tile ) {
    }
}

export class ChangeGameSize implements Action {
    readonly type = GameActionTypes.ChangeGameSize;

    constructor( public payload: number ) {
    }
}

export type GameActions =
    SelectPhoto |
    BuildTiles |
    MoveTile |
    ChangeGameSize;
