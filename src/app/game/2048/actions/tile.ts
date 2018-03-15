/**
 * tile
 */

import { Action } from '@ngrx/store';

export enum TileActionTypes {
    RestTile = '[Tile] Rest Tile'
}

export class RestTile implements Action {
    readonly type = TileActionTypes.RestTile;
}

export type TileActions = RestTile;
