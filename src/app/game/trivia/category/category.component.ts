import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromTrivia from '../store';
import { Observable } from 'rxjs';
import { Category } from '../store/category.reducer';

@Component({
    selector: 'app-game-trivia-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent implements OnInit {

    public categories$: Observable<Category[]>;

    @HostBinding('class.game-trivia-category')
    get gameTriviaCategoryClass(): boolean {
        return true;
    }

    constructor( private store: Store<fromTrivia.TriviaState> ) {
    }

    public ngOnInit() {
        this.categories$ = this.store.pipe(select(fromTrivia.getCategoryList));
    }
}
