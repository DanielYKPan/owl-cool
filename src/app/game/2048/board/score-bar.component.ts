/**
 * score-bar.component
 */

import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    moduleId: module.id,
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
        ])
    ]
})

export class ScoreBarComponent implements OnInit {

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
}
