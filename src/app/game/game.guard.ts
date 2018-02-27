/**
 * game.guard
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';


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

        return Observable.of(true).delay(3000).map(val => 100);
    }
}
