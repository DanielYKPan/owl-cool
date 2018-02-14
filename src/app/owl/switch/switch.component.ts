/**
 * switch.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGSwitchComponent implements OnInit {

    public checked_1 = false;

    public disabled = false;

    public checked_2 = false;

    public checked_3 = false;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Switch',
            desc: `Owl Switch is an Angular component that is used to toggle boolean value.`
        });
    }
}
