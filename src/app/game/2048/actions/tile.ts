/**
 * tile
 */

import { Action } from '@ngrx/store';
import { Tile } from '../tile.model';

export enum TileActionTypes {
    RestTile = '[Tile] Rest Tile',
    AddTile = '[Tile] Add Tile',
}

export class RestTile implements Action {
    readonly type = TileActionTypes.RestTile;
}

export class AddTile implements Action {
    readonly type = TileActionTypes.AddTile;

    constructor( public payload: Tile ) {
    }
}

export type TileActions = RestTile | AddTile;
