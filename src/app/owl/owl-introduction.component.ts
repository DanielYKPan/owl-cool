/**
 * owl-introduction.component
 */

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { OwlIntroductionService } from './owl-introduction.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-owl-introduction',
    templateUrl: './owl-introduction.component.html',
    styleUrls: ['./owl-introduction.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGIntroductionComponent implements OnInit, OnDestroy {

    public title: string;
    public desc: string;

    private subId: Subscription;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.subId = this.introductionService.introductionStream
            .subscribe(( introduction: any ) => {
                this.title = introduction.title;
                this.desc = introduction.desc;
            });
    }

    public ngOnDestroy(): void {
        this.subId.unsubscribe();
    }
}
