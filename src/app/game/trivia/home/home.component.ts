import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromTrivia from '../store';
import { Observable } from 'rxjs/Observable';
import { select, Store } from '@ngrx/store';
import { Achievement } from '../store/achievement';

@Component({
    selector: 'app-game-trivia-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    public achievements$: Observable<Achievement[]>;

    constructor( private store: Store<fromTrivia.TriviaState> ) {
    }

    public ngOnInit() {
        this.achievements$ = this.store.pipe(select(fromTrivia.getAchievements));
    }
}
