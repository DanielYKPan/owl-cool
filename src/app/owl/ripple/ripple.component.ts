/**
 * ripple.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-ripple',
    templateUrl: './ripple.component.html',
    styleUrls: ['./ripple.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGRippleComponent implements OnInit {

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Ripple Directive',
            desc: 'An Angular directive that adds material design\'s ripple effect when an element is clicked.'
        });
    }
}
