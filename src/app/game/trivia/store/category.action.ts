/**
 * category.action
 */

import { Action } from '@ngrx/store';

export enum CategoryActionsTypes {
    Select = '[Trivia Category] Select'
}

export class Select implements Action {
    readonly type = CategoryActionsTypes.Select;

    constructor( public payload: number ) {
    }
}

export type CategoryActions = Select;
