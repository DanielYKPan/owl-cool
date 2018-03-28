import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ACHIEVEMENTS } from '../store/achievement';

@Component({
    selector: 'app-game-trivia-achievements',
    templateUrl: './achievement.component.html',
    styleUrls: ['./achievement.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementComponent implements OnInit {

    public achievements = ACHIEVEMENTS;

    constructor() {
    }

    public ngOnInit() {
    }

}
