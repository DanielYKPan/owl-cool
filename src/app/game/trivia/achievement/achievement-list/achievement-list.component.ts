import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Achievement } from '../../store/achievement';

@Component({
    selector: 'app-game-trivia-achievement-list',
    templateUrl: './achievement-list.component.html',
    styleUrls: ['./achievement-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementListComponent implements OnInit {

    @Input() achievements: Achievement[];

    @Input() achieved: Achievement[];

    constructor() {
    }

    public ngOnInit() {
    }

    public isNotAchieved( achievement: Achievement ): boolean {
        return this.achieved && this.achieved.length && !this.achieved.find(( a ) => a.id === achievement.id);
    }
}
