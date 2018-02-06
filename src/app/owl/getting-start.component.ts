/**
 * getting-start.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OwlIntroductionService } from './owl-introduction.service';

@Component({
    selector: 'app-owl-start',
    templateUrl: './getting-start.component.html',
    styleUrls: ['./getting-start.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGStartComponent implements OnInit {

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Getting Start',
            desc: 'OwlNG is a rich set of open source native Angular UI components.'
        });
    }
}
