/**
 * profile-exits.guard
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { map, switchMap, take } from 'rxjs/operators';
import * as fromTrivia from '../store';
import * as fromProfile from '../store/profile.action';
import { Observable ,  of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Profile } from '../store/profile';
import { Achievement } from '../store/achievement';

@Injectable()
export class ProfileExitsGuard implements CanActivateChild {

    constructor( private store: Store<fromTrivia.TriviaState> ) {
    }

    public canActivateChild( childRoute: ActivatedRouteSnapshot,
                             state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
        return this.waitProfileToLoad();
    }

    private waitProfileToLoad(): Observable<boolean> {
        return this.hasProfileInStore()
            .pipe(
                switchMap(inStore => {
                    if (inStore) {
                        return of(true);
                    }
                    this.loadProfile();
                    return of(true);
                })
            );
    }

    private hasProfileInStore(): Observable<boolean> {
        return this.store.pipe(
            select(fromTrivia.getProfile),
            map(profile => !!profile),
            take(1)
        );
    }

    private loadProfile(): void {
        const profile = <Profile>JSON.parse(localStorage.getItem('trivia_profile')) || new Profile();
        const achievements = <Achievement[]>JSON.parse(localStorage.getItem('trivia_achievements')) || [];
        this.store.dispatch(new fromProfile.StoreProfile(profile));
        this.store.dispatch(new fromProfile.StoreAchievements(achievements));
    }
}
