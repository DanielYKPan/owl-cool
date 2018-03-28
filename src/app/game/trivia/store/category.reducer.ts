/**
 * category.reducer
 */
import { CategoryActions, CategoryActionsTypes } from './category.action';

export interface Category {
    name: string;
    id: number;
    theme: string;
    complementaryTheme: string;
}

const CATEGORIES: Category[] = [
    {name: 'Animals', id: 27, theme: 'violet', complementaryTheme: 'olive'},
    {name: 'Entertainment: Film', id: 11, theme: 'teal', complementaryTheme: 'red'},
    {name: 'Entertainment: Music', id: 12, theme: 'pink', complementaryTheme: 'green'},
    {name: 'General Knowledge', id: 9, theme: 'red', complementaryTheme: 'teal'},
    {name: 'Geography', id: 22, theme: 'purple', complementaryTheme: 'orange'},
    {name: 'History', id: 23, theme: 'blue', complementaryTheme: 'yellow'},
    {name: 'Science: Mathematics', id: 19, theme: 'orange', complementaryTheme: 'purple'},
    {name: 'Science & Nature', id: 17, theme: 'olive', complementaryTheme: 'violet'},
    {name: 'Sports', id: 21, theme: 'yellow', complementaryTheme: 'blue'},
    {name: 'Video Games', id: 15, theme: 'green', complementaryTheme: 'pink'},
];

export interface State {
    selectedId: number;
    list: Category[];
}

const initialState: State = {
    selectedId: null,
    list: CATEGORIES
};

export function reducer( state = initialState, action: CategoryActions ): State {

    switch (action.type) {
        case CategoryActionsTypes.Select:
            return {
                ...state,
                selectedId: action.payload
            };

        default:
            return state;
    }
}

export const getList = ( state: State ) => state.list;
export const getSelectedId = ( state: State ) => state.selectedId;
