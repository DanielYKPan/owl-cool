/**
 * rating.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGRatingComponent implements OnInit {

    public rating = 2;

    public ratingDisabled: boolean;

    public ratingReadonly: boolean;

    public ratingAllowNull: boolean;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Rating',
            desc: `Owl Rating is an Angular component that is used to set rating value.`
        });
    }
}
