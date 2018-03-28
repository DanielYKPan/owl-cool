/**
 * quiz-exits.guard
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ResponseCode, SearchResult, TriviaService } from '../service/trivia.service';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromTrivia from '../store';
import * as fromQuiz from '../store/quiz.action';
import * as fromCategory from '../store/category.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class QuizExitsGuard implements CanActivate {

    constructor( private triviaService: TriviaService,
                 private store: Store<fromTrivia.TriviaState>,
                 private router: Router ) {
    }

    public canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
        return this.hasQuizReady(+route.params['id']);
    }

    private hasQuizReady( category_id: number ): Observable<boolean> {
        return this.triviaService.getQuizByCategory(category_id)
            .pipe(
                tap(() => this.store.dispatch(new fromCategory.Select(category_id))),
                switchMap(( result: SearchResult ) => {
                    if (result.response_code === ResponseCode.Success) {
                        this.store.dispatch(new fromQuiz.SearchComplete(result.results));
                        return of(true);
                    } else if (result.response_code === ResponseCode.No_Results) {
                        this.router.navigate(['/404']);
                        return of(false);
                    } else {
                        return of(false);
                    }
                }),
                catchError(( err: any ) => {
                    console.log('Trivia API Error!');
                    return of(false);
                })
            );
    }
}
