/**
 * timer.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGTimerComponent implements OnInit {

    public timerDays = 1;
    public timerHours = 2;
    public timerMinutes = 3;
    public timerSeconds = 4;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Timer',
            desc: 'Owl Timer is Angular component to count down time.'
        });
    }
}
