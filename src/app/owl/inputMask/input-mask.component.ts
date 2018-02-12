/**
 * input-mask.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-input-mask',
    templateUrl: './input-mask.component.html',
    styleUrls: ['./input-mask.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGInputMaskComponent implements OnInit {

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Input Mask',
            desc: 'Owl Input Mask is an Angular directive that is used to enter input in a certain format.'
        });
    }
}
