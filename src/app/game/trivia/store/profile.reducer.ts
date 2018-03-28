/**
 * profile.reducer
 */
import { ProfileActions, ProfileActionsTypes } from './profile.action';
import { Profile } from './profile';
import { Achievement } from './achievement';

export interface State {
    profile: Profile;
    achievements: Achievement[];
}

const initialState: State = {
    profile: null,
    achievements: [],
};

function storeProfileToLocalStorage( profile: Profile ): void {
    localStorage.setItem('trivia_profile', JSON.stringify(profile));
}

function storeAchievementsToLocalStorage( achievements: Achievement[] ): void {
    localStorage.setItem('trivia_achievements', JSON.stringify(achievements));
}

export function reducer( state = initialState, action: ProfileActions ): State {
    switch (action.type) {

        case ProfileActionsTypes.StoreProfile:
            const profile = Object.assign({}, state.profile, action.payload);
            return {
                ...state,
                profile
            };

        case ProfileActionsTypes.StoreAchievements:
            const achievements = [...state.achievements, ...action.payload];
            return {
                ...state,
                achievements: achievements
            };

        case ProfileActionsTypes.UpdateProfile:
            const updatedProfile = Object.assign({}, state.profile, action.payload);
            storeProfileToLocalStorage(updatedProfile);
            return {
                ...state,
                profile: updatedProfile
            };

        case ProfileActionsTypes.UpdatePoints:
            const updatedPointsProfile = Object.assign({}, state.profile, {points: state.profile.points + action.payload});
            storeProfileToLocalStorage(updatedPointsProfile);
            return {
                ...state,
                profile: updatedPointsProfile
            };

        case ProfileActionsTypes.UpdateAchievements:
            const updatedAchievements = [...state.achievements, ...action.payload];
            storeAchievementsToLocalStorage(updatedAchievements);
            return {
                ...state,
                achievements: updatedAchievements
            };

        default:
            return state;
    }
}

export const getProfile = ( state: State ) => state.profile;
export const getAchievements = ( state: State ) => state.achievements;
