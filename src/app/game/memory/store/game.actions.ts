/**
 * game.action
 */

import { Action } from '@ngrx/store';

export enum GameActionTypes {
    BuildTiles = '[Memory] Build Tiles',
    CoverAllTiles = '[Memory] Cover All Tiles',
    FlipTiles = '[Memory] Flip Tiles'
}

export class BuildTiles implements Action {
    readonly type = GameActionTypes.BuildTiles;
}

export class CoverAllTiles implements Action {
    readonly type = GameActionTypes.CoverAllTiles;
}

export class FlipTiles implements Action {
    readonly type = GameActionTypes.FlipTiles;

    constructor( public payload: { ids: string[], state: boolean } ) {
    }
}

export type GameActions =
    BuildTiles |
    CoverAllTiles |
    FlipTiles;
