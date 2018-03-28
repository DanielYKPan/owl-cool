import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-game-trivia-quiz-points',
    templateUrl: './quiz-points.component.html',
    styleUrls: ['./quiz-points.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizPointsComponent implements OnInit {

    @Input() points: number;

    constructor() {
    }

    public ngOnInit() {
    }

}
