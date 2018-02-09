/**
 * tooltip.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGTooltipComponent implements OnInit {

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Tooltip',
            desc: 'An Angular directive that provides advisory information about the item being hovered over.'
        });
    }
}
