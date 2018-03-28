import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromTrivia from '../store';
import * as fromQuiz from '../store/quiz.action';
import * as fromProfile from '../store/profile.action';
import { Observable } from 'rxjs/Observable';
import { Quiz } from '../store/quiz';
import { Category } from '../store/category.reducer';
import { AchievementEventService } from '../service/achievement-event.service';
import { Booster, BOOSTERS } from '../store/booster';
import { Subscription } from 'rxjs/Subscription';

import { OwlNotifierService, OwlTimerComponent } from '../../../../../npmdist/owl-ng';

@Component({
    selector: 'app-game-trivia-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizComponent implements OnInit, OnDestroy {

    @ViewChild('timer') owlTimer: OwlTimerComponent;

    public quizList$: Observable<Quiz[]>;

    public quiz$: Observable<Quiz>;

    public category$: Observable<Category>;

    public corrects$: Observable<number>;

    public quiz: Quiz;

    public points: number;

    public quizNumber: number;

    public quizLength: number;

    public showQuizResult = false;

    public boosters: Booster[] = BOOSTERS;

    private timerId: any;

    private quizSub = Subscription.EMPTY;

    private quizNumberSub = Subscription.EMPTY;

    private quizLengthSub = Subscription.EMPTY;

    private pointsSub = Subscription.EMPTY;

    constructor( private store: Store<fromTrivia.TriviaState>,
                 private achievementEvent: AchievementEventService,
                 private owlNotifier: OwlNotifierService,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {

        this.quizList$ = this.store.pipe(select(fromTrivia.getQuizzes));
        this.quiz$ = this.store.pipe(select(fromTrivia.getSelectedQuestion));
        this.category$ = this.store.pipe(select(fromTrivia.getSelectedCategory));
        this.corrects$ = this.store.pipe(select(fromTrivia.getQuizCorrectCount));

        this.quizSub = this.store.pipe(select(fromTrivia.getSelectedQuestion))
            .subscribe(( val ) => this.quiz = val);

        this.quizNumberSub = this.store.pipe(select(fromTrivia.getSelectedQuestionNumber))
            .subscribe(( val ) => this.quizNumber = val);

        this.quizLengthSub = this.store.pipe(select(fromTrivia.getQuizLength))
            .subscribe(( val ) => this.quizLength = val);

        this.pointsSub = this.store.pipe(select(fromTrivia.getProfilePoints))
            .subscribe(( val ) => this.points = val);
    }

    public ngOnDestroy(): void {
        this.clearTimeoutId();
        this.quizLengthSub.unsubscribe();
        this.quizNumberSub.unsubscribe();
        this.pointsSub.unsubscribe();
        this.achievementEvent.cleanAllSubscription();
    }

    public clickBooster( booster: Booster ): void {
        if (booster.cost <= this.points) {

            if (booster.name === 'increaseTime') {

                this.owlTimer.addCDSeconds(10);
                this.store.dispatch(new fromProfile.UpdatePoints(-booster.cost));

            } else if (booster.name === 'deleteWrongAnswer') {

                const enabledOptions = this.quiz.options.filter((option => option.enable));
                if (Math.floor(enabledOptions.length / 2) <= 1) {
                    this.owlNotifier.open(
                        'There are only ' + enabledOptions.length +
                        ' options, guess the right one! Not enough options to delete', '',
                        {type: 'info', life: 1500}
                    );
                } else {
                    this.store.dispatch(new fromQuiz.DeleteHalfOptions());
                    this.store.dispatch(new fromProfile.UpdatePoints(-booster.cost));
                }
            }

        } else {
            this.owlNotifier.open(
                'Not enough gold! Play more to obtain more coins.', '',
                {type: 'info', life: 1500}
            );
        }
    }

    public choose( result: { correct: string, chosen: string } ): void {
        if (this.owlTimer.countDownValue === 0) {
            return;
        }

        this.store.dispatch(new fromQuiz.SetChosen(result.chosen));
        const isCorrect = result.correct === result.chosen;
        const message = isCorrect ?
            'Correct! You are awesome!' : 'Oops! That is not the correct answer.';
        const type = result.correct === result.chosen ? 'success' : 'error';
        this.achievementEvent.handleQuizAnswerEvent(isCorrect);
        this.goToNext(message, type);
    }

    public handleTimesUp(): void {
        const message = 'Time\'s Up!!!';
        const type = 'warning';
        this.store.dispatch(new fromQuiz.SetChosen(null));
        this.achievementEvent.handleQuizAnswerEvent(false);
        this.goToNext(message, type);
    }

    private goToNext( message: any, type: any ): void {
        const life = 2000;
        this.owlTimer.pauseTimer();
        this.clearTimeoutId();
        this.owlNotifier.open(message, '', {type, life: life - 500});

        this.timerId = setTimeout(() => {

            if (this.quizNumber < this.quizLength) {
                this.store.dispatch(new fromQuiz.Next());
                this.owlTimer.resetTimer();
                this.owlTimer.startTimer();
            } else {
                this.showQuizResult = true;
                this.achievementEvent.handleQuizCompleteEvent();
            }

            this.cdRef.markForCheck();
        }, life);
    }

    private clearTimeoutId(): void {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }
}
