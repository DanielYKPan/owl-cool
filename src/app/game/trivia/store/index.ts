/**
 * index
 */

import * as fromQuiz from './quiz.reducer';
import * as fromCategory from './category.reducer';
import * as fromProfile from './profile.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Profile } from './profile';

export interface TriviaState {
    quiz: fromQuiz.State;
    category: fromCategory.State;
    profile: fromProfile.State;
}

export const reducers: ActionReducerMap<TriviaState> = {
    quiz: fromQuiz.reducer,
    category: fromCategory.reducer,
    profile: fromProfile.reducer,
};

export const getTriviaState = createFeatureSelector<TriviaState>('trivia');

export const getQuizState = createSelector(
    getTriviaState,
    ( state: TriviaState ) => state.quiz
);

export const getQuizzes = createSelector(
    getQuizState,
    fromQuiz.getQuizzes
);

export const getQuizLength = createSelector(
    getQuizzes,
    ( quizzes ) => quizzes.length
);

export const getSelectedIndex = createSelector(
    getQuizState,
    fromQuiz.getSelectedIndex
);

export const getSelectedQuestion = createSelector(
    getQuizzes,
    getSelectedIndex,
    ( quizzes, index ) => quizzes[index]
);

export const getQuizCorrectCount = createSelector(
    getQuizzes,
    ( quizzes ) => {
        let correct_count = 0;

        for (const q of quizzes) {
            if (q.correct_answer === q.chosen) {
                correct_count += 1;
            }
        }

        return correct_count;
    }
);

export const getSelectedQuestionNumber = createSelector(
    getSelectedIndex,
    ( index ) => index + 1
);

export const getCategoryState = createSelector(
    getTriviaState,
    ( state: TriviaState ) => state.category
);

export const getCategoryList = createSelector(
    getCategoryState,
    fromCategory.getList
);

export const getSelectedCategoryId = createSelector(
    getCategoryState,
    fromCategory.getSelectedId
);

export const getSelectedCategory = createSelector(
    getCategoryList,
    getSelectedCategoryId,
    ( list, selectedId ) => list.find(category => category.id === selectedId)
);

export const getProfileState = createSelector(
    getTriviaState,
    ( state: TriviaState ) => state.profile
);

export const getProfile = createSelector(
    getProfileState,
    fromProfile.getProfile
);

export const getProfilePoints = createSelector(
    getProfile,
    ( profile: Profile ) => profile.points
);

export const getAchievements = createSelector(
    getProfileState,
    fromProfile.getAchievements
);
