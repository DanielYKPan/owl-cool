/**
 * getting-start.component
 */

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { OwlIntroductionService } from './owl-introduction.service';
import { RouteProcessService } from '../core/route-process/route-process.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-owl-start',
    templateUrl: './getting-start.component.html',
    styleUrls: ['./getting-start.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGStartComponent implements OnInit, OnDestroy {

    private routeFragmentSub = Subscription.EMPTY;

    constructor( private routeProcess: RouteProcessService,
                 private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Getting Start',
            desc: 'OwlNG is a rich set of open source native Angular UI components.'
        });
    }

    public ngOnDestroy(): void {
        this.routeFragmentSub.unsubscribe();
    }
}
