/**
 * grid
 */

import { Action } from '@ngrx/store';

export enum GridActionTypes {
    BuildGrid = '[Grid] Build Grid',
    AddId = '[Grid] Add Id',
    RemoveId = '[Grid] Remove Id'
}

export class BuildGrid implements Action {
    readonly type = GridActionTypes.BuildGrid;

    constructor( public payload: number ) {
    }
}

export class AddId implements Action {
    readonly type = GridActionTypes.AddId;

    constructor( public payload: string ) {
    }
}

export class RemoveId implements Action {
    readonly type = GridActionTypes.RemoveId;

    constructor( public payload: string ) {
    }
}

export type GridActions = BuildGrid | AddId | RemoveId;
