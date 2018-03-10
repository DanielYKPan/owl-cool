/**
 * stop-watch.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-stop-watch',
    templateUrl: './stop-watch.component.html',
    styleUrls: ['./stop-watch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGStopWatchComponent implements OnInit {

    public lapResult: any[];

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Stop Watch',
            desc: 'Owl Stop Watch is Angular component to measure time with styles and animations.'
        });
    }

    public lap( event: any ): void {
        this.lapResult = event.lapList;
    }

    public trackByFn( index: number, item: any ): void {
        return item.order;
    }
}
