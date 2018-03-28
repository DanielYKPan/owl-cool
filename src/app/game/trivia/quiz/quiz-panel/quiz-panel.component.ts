import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../../store/quiz';
import { Category } from '../../store/category.reducer';

@Component({
    selector: 'app-game-trivia-quiz-panel',
    templateUrl: './quiz-panel.component.html',
    styleUrls: ['./quiz-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizPanelComponent implements OnInit {

    @Input() quiz: Quiz;

    @Input() category: Category;

    @Input() quizNumber: number;

    @Input() quizLength: number;

    @Input() showChosen: boolean;

    @Output() choose = new EventEmitter<{ correct: string, chosen: string }>();

    @HostBinding('class')
    get quizPanelClass(): string {
        return this.category.theme;
    }

    get quizAnswered(): boolean {
        return this.quiz.chosen !== undefined;
    }

    constructor() {
    }

    public ngOnInit() {
    }

    public choiceCharCode( index: number ) {
        return String.fromCharCode(65 + index);
    }

    public handleClickOnOption( option: string ) {
        if (this.quiz.chosen === null || this.quiz.chosen === undefined) {
            this.choose.emit({correct: this.quiz.correct_answer, chosen: option});
        }
    }
}
