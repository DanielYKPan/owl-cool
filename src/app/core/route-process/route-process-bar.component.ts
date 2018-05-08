/**
 * route-process-bar.component
 */

import {
    AfterContentInit,
    ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, OnInit,
    ViewEncapsulation
} from '@angular/core';
import { animate, AnimationEvent, query, state, style, transition, trigger } from '@angular/animations';
import { distinctUntilChanged ,  map } from 'rxjs/operators';
import { Observable ,  Subject } from 'rxjs';
import { RouteProcessService } from './route-process.service';

@Component({
    selector: 'app-route-process-bar',
    templateUrl: './route-process-bar.component.html',
    styleUrls: ['./route-process-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('fadeInOut', [
            state('progressing', style({display: 'block'})),
            state('done', style({display: 'none'})),
            transition('* => progressing', [
                query('.route-process-bar', [
                    style({transform: 'scaleX(0)'}),
                    animate('200ms ease', style({transform: 'scaleX(.1)'})),
                ]),
            ]),
            transition('progressing => done', [
                style({display: 'block', opacity: 1}),
                animate('300ms 200ms ease', style({display: 'block', opacity: 0})),
            ])
        ])
    ],
})

export class RouteProcessBarComponent implements OnInit, AfterContentInit {

    private _isDone = false;

    private _progress = 0;
    get progress(): number {
        return this._progress;
    }

    @HostBinding('class.route-process-bar-container')
    get routeProcessBarContainerClass(): boolean {
        return true;
    }

    @HostBinding('@fadeInOut')
    get routeProcessBarAnimation(): string {
        return this._isDone ? 'done' : 'progressing';
    }

    constructor( private routeProcess: RouteProcessService,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
        this.routeProcess.processChange.subscribe(( val: number ) => {
            this._progress = val;
            this._isDone = this._progress >= 1;
            this.cdRef.markForCheck();
        });
    }

    public ngAfterContentInit(): void {
    }

    @HostListener('@fadeInOut.done', ['$event'])
    private fadeOutAnimationDone( event: AnimationEvent ): void {
        if (event.toState === 'done') {
            this._progress = 0;
            this.cdRef.markForCheck();
        }
    }
}
