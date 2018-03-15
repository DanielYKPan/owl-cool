/**
 * tile
 */

import { Action } from '@ngrx/store';
import { Tile } from '../tile.model';

export enum TileActionTypes {
    RestTile = '[Tile] Rest Tile',
    AddTile = '[Tile] Add Tile',
    UpdateTile = '[Tile] Update Tile',
    DumpTiles = '[Tile] Dump Tiles',
}

export class RestTile implements Action {
    readonly type = TileActionTypes.RestTile;
}

export class AddTile implements Action {
    readonly type = TileActionTypes.AddTile;

    constructor( public payload: Tile ) {
    }
}

export class UpdateTile implements Action {
    readonly type = TileActionTypes.UpdateTile;

    constructor( public payload: { newPosition: number, oldTile: Tile, nextTile: Tile } ) {
    }
}

export class DumpTiles implements Action {
    readonly type = TileActionTypes.DumpTiles;
}

export type TileActions = RestTile | AddTile | UpdateTile | DumpTiles;
