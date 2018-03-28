/**
 * quiz.action
 */

import { Action } from '@ngrx/store';
import { Quiz } from './quiz';

export enum QuizActionsTypes {
    Search = '[Trivia Quiz] Search',
    SearchComplete = '[Trivia Quiz] Search Complete',
    SearchError = '[Trivia Quiz] Search Error',
    Next = '[Trivia Quiz] Next',
    SetChosen = '[Trivia Quiz] Set Chosen',
    DeleteHalfOptions = '[Trivia Quiz] Delete Half Options',
}

export class Search implements Action {
    readonly type = QuizActionsTypes.Search;

    constructor( public payload: number ) {
    }
}

export class SearchComplete implements Action {
    readonly type = QuizActionsTypes.SearchComplete;

    constructor( public payload: Quiz[] ) {
    }
}

export class SearchError implements Action {
    readonly type = QuizActionsTypes.SearchError;

    constructor( public payload: string ) {
    }
}

export class Next implements Action {
    readonly type = QuizActionsTypes.Next;
}

export class SetChosen implements Action {
    readonly type = QuizActionsTypes.SetChosen;

    constructor( public payload: string ) {
    }
}

export class DeleteHalfOptions implements Action {
    readonly type = QuizActionsTypes.DeleteHalfOptions;
}

export type QuizActions =
    Search |
    SearchComplete |
    SearchError |
    Next |
    SetChosen |
    DeleteHalfOptions;
