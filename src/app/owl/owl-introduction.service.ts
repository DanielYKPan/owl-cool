/**
 * owl-introduction.service
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OwlIntroductionService {

    private _introduction$ = new Subject<any>();
    private _introductionStream = this._introduction$.asObservable();
    get introductionStream() {
        return this._introductionStream;
    }

    constructor() {
    }

    public setIntroduction( introduction: { title: string, desc: string } ): void {
        this._introduction$.next(introduction);
    }
}
