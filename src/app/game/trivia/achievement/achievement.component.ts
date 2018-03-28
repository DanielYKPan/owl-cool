import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Achievement, ACHIEVEMENTS } from '../store/achievement';
import * as fromTrivia from '../store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-game-trivia-achievements',
    templateUrl: './achievement.component.html',
    styleUrls: ['./achievement.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementComponent implements OnInit {

    public achievements = ACHIEVEMENTS;

    public achieved$: Observable<Achievement[]>;

    constructor( private store: Store<fromTrivia.TriviaState> ) {
    }

    public ngOnInit() {
        this.achieved$ = this.store.pipe(select(fromTrivia.getAchievements));
    }

}
