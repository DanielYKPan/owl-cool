import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Booster } from '../../store/booster';

@Component({
    selector: 'app-game-trivia-quiz-booster',
    templateUrl: './quiz-booster.component.html',
    styleUrls: ['./quiz-booster.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizBoosterComponent implements OnInit {

    @Input() boosters: Booster[];

    @Output() clickBooster = new EventEmitter<Booster>();

    constructor() {
    }

    public ngOnInit() {
    }

    public handleClickOnBooster( booster: Booster ): void {
        this.clickBooster.emit(booster);
    }
}
