/**
 * notifier.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';
import { OwlNotifierService } from 'owl-ng';

@Component({
    selector: 'app-owl-notifier',
    templateUrl: './notifier.component.html',
    styleUrls: ['./notifier.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGNotifierComponent implements OnInit {

    public message = 'Here is your notifier message.';

    public action = 'Action';

    public vertical: any = 'bottom';

    public horizontal: any = 'center';

    public life = 0;

    public type: any;

    constructor( private introductionService: OwlIntroductionService,
                 private notifier: OwlNotifierService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Notifier',
            desc: `Owl Notifier is Angular service providing simple notifications.`
        });
    }

    public notify(): void {
        this.notifier.open(this.message, this.action, {
            verticalPosition: this.vertical,
            horizontalPosition: this.horizontal,
            life: this.life,
            type: this.type
        });
    }
}
