/**
 * badge.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGBadgeComponent implements OnInit {

    public hidden = false;

    public value = 5;

    public position_x = 'right';

    public position_y = 'above';

    public size = 'medium';

    public overlap = true;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Badge',
            desc: 'Badge is an component to show status for UI elements'
        });
    }

    public toggleHidden(): void {
        this.hidden = !this.hidden;
    }

    public increaseValue(): void {
        this.value += 1;
    }
}
