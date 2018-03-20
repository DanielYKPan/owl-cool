/**
 * tile.actions
 */

import { Action } from '@ngrx/store';
import { Tile } from './tile.model';
import { GameLevel } from './tile.reducer';

export enum TileActionTypes {
    BuildTiles = '[Minesweeper Tile] Build Tiles',
    RevealTile = '[Minesweeper Tile] Reveal Tile',
    RevealAllUncoveredTiles = '[Minesweeper Tile] Reveal All Uncovered Tiles',
    HitTile = '[Minesweeper Tile] Hit Tile',
    CoverTile = '[Minesweeper Tile] Cover Tile',
    UncoverTile = '[Minesweeper Tile] Uncover Tile',
    HitMine = '[Minesweeper Tile] Hit Mine',
    SetLevel = '[Minesweeper Tile] Set Level',
}

export class BuildTiles implements Action {
    readonly type = TileActionTypes.BuildTiles;
}

export class RevealTile implements Action {
    readonly type = TileActionTypes.RevealTile;

    constructor( public payload: Tile ) {
    }
}

export class RevealAllUncoveredTiles implements Action {
    readonly type = TileActionTypes.RevealAllUncoveredTiles;
}

export class HitTile implements Action {
    readonly type = TileActionTypes.HitTile;

    constructor( public payload: Tile ) {
    }
}

export class CoverTile implements Action {
    readonly type = TileActionTypes.CoverTile;

    constructor( public payload: Tile ) {
    }
}

export class UncoverTile implements Action {
    readonly type = TileActionTypes.UncoverTile;

    constructor( public payload: Tile ) {
    }
}

export class HitMine implements Action {
    readonly type = TileActionTypes.HitMine;

    constructor( public payload: Tile ) {
    }
}

export class SetLevel implements Action {
    readonly type = TileActionTypes.SetLevel;

    constructor( public payload: GameLevel ) {
    }
}

export type TileActions =
    BuildTiles |
    RevealTile |
    RevealAllUncoveredTiles |
    HitTile |
    HitMine |
    CoverTile |
    UncoverTile |
    SetLevel;
