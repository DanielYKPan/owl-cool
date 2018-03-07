/**
 * getting-start.component
 */

import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { OwlIntroductionService } from './owl-introduction.service';
import { RouteProcessService } from '../core/route-process/route-process.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-owl-start',
    templateUrl: './getting-start.component.html',
    styleUrls: ['./getting-start.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGStartComponent implements OnInit, AfterViewInit, OnDestroy {

    private routeFragmentSub = Subscription.EMPTY;

    constructor( private routeProcess: RouteProcessService,
                 private introductionService: OwlIntroductionService,
                 private route: ActivatedRoute ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Getting Start',
            desc: 'OwlNG is a rich set of open source native Angular UI components.'
        });
    }

    public ngAfterViewInit(): void {
        this.routeFragmentSub = this.route.fragment
            .subscribe(fragment => {
                if (fragment) {
                    const element = document.getElementById(fragment);
                    if (element) {
                        element.scrollIntoView();
                    }
                }
            });
    }

    public ngOnDestroy(): void {
        this.routeFragmentSub.unsubscribe();
    }
}
