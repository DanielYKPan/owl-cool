/**
 * back-top.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-back-top',
    templateUrl: './back-top.component.html',
    styleUrls: ['./back-top.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGBackTopComponent implements OnInit {

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'BackToTop Button',
            desc: 'BackToTop Button is an button component to let you scroll back to top by clicking it.'
        });
    }
}
