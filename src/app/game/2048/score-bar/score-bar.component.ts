/**
 * score-bar.component
 */

import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';
import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-game-2048-score-bar',
    templateUrl: './score-bar.component.html',
    styleUrls: ['./score-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    animations: [
        trigger('slideIn', [
            transition('void => *', [
                style({opacity: 0, transform: 'translateY(100%)'}),
                animate('300ms ease-out')
            ])
        ]),
        trigger('increaseScores', [
            transition('void => active', [
                style({opacity: 1, transform: 'translateY(0)'}),
                animate('800ms ease-in', style({
                        opacity: 0,
                        transform: 'translateY(-80px)'
                    })
                )
            ])
        ])
    ]
})

export class ScoreBarComponent implements OnInit, OnChanges {

    public increasedScores: Array<{ value: number, state: string }> = [];

    @Input() scores = 0;

    @Input() highest = 0;

    @HostBinding('class.game-2048-score-bar')
    get game2048ScoreBarClass(): boolean {
        return true;
    }

    @HostBinding('@slideIn')
    get scoreBarAnimation(): boolean {
        return true;
    }

    constructor() {
    }

    public ngOnInit() {
    }

    public ngOnChanges( changes: SimpleChanges ): void {
        const preScores = changes['scores'].previousValue;
        const curScores = changes['scores'].currentValue;
        let incScores = 0;
        if (curScores >= 0 && preScores >= 0) {
            incScores = curScores - preScores;
        }
        if (incScores > 0) {
            this.increasedScores.push({value: incScores, state: 'active'});
        }
    }

    public animationDone( event: AnimationEvent ): void {
        if (event.toState === 'active') {
            this.increasedScores.shift();
        }
    }
}
