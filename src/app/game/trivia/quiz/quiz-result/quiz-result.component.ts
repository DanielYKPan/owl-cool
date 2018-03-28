import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';
import { Quiz } from '../../store/quiz';
import { Category } from '../../store/category.reducer';

@Component({
    selector: 'app-game-trivia-quiz-result',
    templateUrl: './quiz-result.component.html',
    styleUrls: ['./quiz-result.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizResultComponent implements OnInit {

    @Input() category: Category;

    @Input() quizList: Quiz[];

    @Input() quizLength: number;

    @Input() corrects: number;

    @ViewChild('list') resultListElmRef: ElementRef;

    constructor() {
    }

    public ngOnInit() {
    }

    public scrollToList(): void {
        // this.resultListElmRef.nativeElement.scrollIntoView({behavior: 'smooth'});
        window.scroll({ top: window.innerHeight, behavior: 'smooth' });
    }
}
