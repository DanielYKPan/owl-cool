/**
 * getting-start.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OwlIntroductionService } from './owl-introduction.service';
import { RouteProcessService } from '../core/route-process/route-process.service';

@Component({
    selector: 'app-owl-start',
    templateUrl: './getting-start.component.html',
    styleUrls: ['./getting-start.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGStartComponent implements OnInit {

    constructor( private routeProcess: RouteProcessService,
                 private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Getting Start',
            desc: 'OwlNG is a rich set of open source native Angular UI components.'
        });
    }

    public startProcess(): void {
        this.routeProcess.start();
    }

    public doneProcess(): void {
        this.routeProcess.complete();
    }
}
