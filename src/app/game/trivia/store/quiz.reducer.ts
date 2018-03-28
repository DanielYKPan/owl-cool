/**
 * quiz.reducer
 */
import { Quiz } from './quiz';
import { QuizActions, QuizActionsTypes } from './quiz.action';
import { shuffle } from '../../share/utils';

export interface State {
    selectedIndex: number;
    quizzes: Quiz[];
}

const initialState: State = {
    selectedIndex: 0,
    quizzes: [],
};

export function reducer( state = initialState, action: QuizActions ): State {

    switch (action.type) {
        case QuizActionsTypes.SearchComplete:
            return {
                ...state,
                selectedIndex: 0,
                quizzes: action.payload.map(( quiz: Quiz ) => {
                    const options = shuffle<string>([...quiz.incorrect_answers, quiz.correct_answer]);
                    quiz.options = options.map(( option ) => {
                        return {name: option, enable: true};
                    });
                    return quiz;
                })
            };

        case QuizActionsTypes.Next:
            let next = state.selectedIndex + 1;
            next = next < state.quizzes.length ? next : state.selectedIndex;
            return {
                ...state,
                selectedIndex: next
            };

        case QuizActionsTypes.SetChosen:
            return {
                ...state,
                quizzes: state.quizzes.map(( q, index ) => {
                    if (index === state.selectedIndex) {
                        return Object.assign({}, q, {chosen: action.payload});
                    } else {
                        return q;
                    }
                })
            };

        case QuizActionsTypes.DeleteHalfOptions:
            const selectedQuiz = state.quizzes[state.selectedIndex];
            const selectedQuizOptions = selectedQuiz.options;
            const halfOptionsAmount = selectedQuizOptions.filter(( option ) => option.enable).length / 2;

            for (let i = 0; i < halfOptionsAmount; i++) {
                let index = Math.floor(Math.random() * selectedQuizOptions.length);
                while (!selectedQuizOptions[index].enable ||
                selectedQuizOptions[index].name === selectedQuiz.correct_answer) {
                    index = Math.floor(Math.random() * selectedQuizOptions.length);
                }
                selectedQuizOptions[index].enable = false;
            }

            state.quizzes[state.selectedIndex] = Object.assign({}, selectedQuiz, {options: selectedQuizOptions});

            return {
                ...state,
                quizzes: [...state.quizzes]
            };

        default:
            return state;
    }

}

export const getQuizzes = ( state: State ) => state.quizzes;
export const getSelectedIndex = ( state: State ) => state.selectedIndex;
