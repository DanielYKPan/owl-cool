/**
 * quiz
 */

export interface Quiz {
    category: string;
    type: 'multiple' | 'boolean';
    difficulty: 'easy' | 'medium' | 'hard';
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    options: Array<{name: string, enable: boolean}>;
    chosen: string;
}
