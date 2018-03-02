/**
 * progressbar.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-progress-bar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGProgressBarComponent implements OnInit {

    public showValue = true;

    public bufferValue = 70;

    public value = 50;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Progress Bar',
            desc: `Owl ProgressBar is a process status indicator.`
        });
    }
}
