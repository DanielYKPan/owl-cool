/**
 * route-process-bar.component
 */

import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,
    ViewEncapsulation
} from '@angular/core';
import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-route-process-bar',
    templateUrl: './route-process-bar.component.html',
    styleUrls: ['./route-process-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('fadeOut', [
            transition('loading => loaded', [
                style({opacity: 1}),
                animate('300ms 200ms ease', style({opacity: 0})),
            ])
        ])
    ],
})

export class RouteProcessBarComponent implements OnInit {

    public processChange: Observable<any>;

    public _isLoaded: boolean;
    get isLoaded(): boolean {
        return this._isLoaded;
    }

    private _process: number;
    get process(): number {
        return this._process;
    }

    private processComplete$ = new Subject<any>();

    get processComplete(): Observable<any> {
        return this.processComplete$.asObservable();
    }

    @HostBinding('class.route-process-bar-container')
    get routeProcessBarContainerClass(): boolean {
        return true;
    }

    constructor( private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {

        this._isLoaded = false;

        this.processChange
            .pipe(
                distinctUntilChanged(),
                map(val => val * 100)
            )
            .subscribe(( val: number ) => {
                this._process = val;
                if (this._process === 100) {
                    this._isLoaded = true;
                }
                this.cdRef.markForCheck();
            });
    }

    public fadeOutAnimationDone( event: AnimationEvent ): void {
        if (event.toState === 'loaded') {
            this.processComplete$.next(null);
        }
    }
}
