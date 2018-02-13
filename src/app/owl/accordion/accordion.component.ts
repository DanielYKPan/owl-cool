/**
 * accordion.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGAccordionComponent implements OnInit {

    public index = 0;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Accordion Panel',
            desc: 'Owl Accordion groups a collection of contents in tabs with accordion styles and animations.'
        });
    }

    public openPrev() {
        if (this.index === 0) {
            return;
        }

        this.index -= 1;
    }

    public openNext() {
        if (this.index === 2) {
            return;
        }

        this.index += 1;
    }

    public setStep( num: number ): void {
        if (this.index !== num) {
            this.index = num;
        }
    }
}
