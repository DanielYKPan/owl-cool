/**
 * profile.action
 */

import { Action } from '@ngrx/store';
import { Profile } from './profile';
import { Achievement } from './achievement';

export enum ProfileActionsTypes {
    StoreProfile = '[Trivia Profile] Store Profile',
    StoreAchievements = '[Trivia Profile] Store Achievements',
    UpdateProfile = '[Trivia Profile] Update Profile',
    UpdatePoints = '[Trivia Profile] Update Profile Points',
    UpdateAchievements = '[Trivia Profile] Update Achievements',
}

export class StoreProfile implements Action {
    readonly type = ProfileActionsTypes.StoreProfile;

    constructor( public payload: Profile ) {
    }
}

export class StoreAchievements implements Action {
    readonly type = ProfileActionsTypes.StoreAchievements;

    constructor( public payload: Achievement[] ) {
    }
}

export class UpdateProfile implements Action {
    readonly type = ProfileActionsTypes.UpdateProfile;

    constructor( public payload: Profile ) {
    }
}

export class UpdatePoints implements Action {
    readonly type = ProfileActionsTypes.UpdatePoints;

    constructor( public payload: number ) {
    }
}

export class UpdateAchievements implements Action {
    readonly type = ProfileActionsTypes.UpdateAchievements;

    constructor( public payload: Achievement[] ) {
    }
}

export type ProfileActions =
    StoreProfile |
    StoreAchievements |
    UpdateProfile |
    UpdatePoints |
    UpdateAchievements;
