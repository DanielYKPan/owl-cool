/**
 * game.guard
 */


import {of as observableOf,  Observable } from 'rxjs';

import {map, delay} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot } from '@angular/router';






@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('AuthGuard#canActivate called');
        return true;
    }
}


@Injectable()
export class ShitResolver implements Resolve<any> {
    constructor() {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        return observableOf(true).pipe(delay(3000),map(val => 100),);
    }
}
