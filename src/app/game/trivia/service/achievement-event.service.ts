/**
 * achievement-event.service
 */

import { Injectable } from '@angular/core';
import * as fromTrivia from '../store';
import * as fromProfile from '../store/profile.action';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Profile } from '../store/profile';
import { Achievement } from '../store/achievement';
import { ComboHandler } from '../handlers/combo-handler';
import { CompletedHandler } from '../handlers/completed-handler';
import { ScoreHandler } from '../handlers/score-handler';

import { OwlNotifierService } from 'owl-ng';

const HANDLERS = [
    ComboHandler,
    CompletedHandler,
    ScoreHandler,
];

@Injectable()
export class AchievementEventService {

    private getProfileSub = Subscription.EMPTY;

    private getAchievementsSub = Subscription.EMPTY;

    private profile: Profile;

    private achievements: Achievement[];

    constructor( private store: Store<fromTrivia.TriviaState>,
                 private owlNotifier: OwlNotifierService ) {
        this.getProfileSub = this.store
            .pipe(select(fromTrivia.getProfile))
            .subscribe(( profile: Profile ) => this.profile = profile);

        this.getAchievementsSub = this.store
            .pipe(select(fromTrivia.getAchievements))
            .subscribe(( achievements ) => this.achievements = achievements);
    }

    public handleQuizAnswerEvent( isCorrect: boolean ): void {

        if (isCorrect) {
            this.profile.consecutive += 1;
            this.profile.correct += 1;
        } else {
            this.profile.consecutive = 0;
            this.profile.wrong += 1;
        }

        this.updateAchievements();
        this.updateProfile();
    }

    public handleQuizCompleteEvent(): void {
        this.profile.completed += 1;
        this.updateAchievements();
        this.updateProfile();
    }

    public cleanAllSubscription(): void {
        this.getProfileSub.unsubscribe();
        this.getAchievementsSub.unsubscribe();
    }

    private getAchieved(): Achievement[] {
        const achieved = HANDLERS.map(( handler ) => handler.getAchieved(this.profile, this.achievements));
        return [].concat.apply([], achieved);
    }

    private updateProfile(): void {
        this.store.dispatch(new fromProfile.UpdateProfile(this.profile));
    }

    private updateAchievements(): void {
        const achieved = this.getAchieved();
        if (achieved && achieved.length > 0) {
            this.store.dispatch(new fromProfile.UpdateAchievements(achieved));
            achieved.map(( achievement ) => this.owlNotifier.open(achievement.description, '', {
                life: 2000,
                type: 'info'
            }));
            this.profile.points += this.getPoints(achieved);
        }
    }

    private getPoints( achievements: Achievement[] ): number {
        const points = achievements.map(( achievement ) => achievement.points);
        return points != null && points.length > 0 ?
            points.reduce(( total, current ) => total + current) : 0;
    }
}
