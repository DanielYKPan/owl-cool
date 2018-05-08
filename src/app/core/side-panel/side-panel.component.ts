/**
 * side-panel.component
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class SidePanelComponent implements OnInit, OnDestroy {

    private viewPortSizeChangeSub = Subscription.EMPTY;

    private _showTabletNav: boolean;
    get showTabletNav(): boolean {
        return this._showTabletNav;
    }

    @HostBinding('class.layout-side-panel')
    get layoutSidePanelClass(): boolean {
        return true;
    }

    constructor( private appService: AppService,
                 private cdRef: ChangeDetectorRef ) {
        this.viewPortSizeChangeSub = this.appService.viewPortSizeChange
            .subscribe(( event: any ) => {
                this.checkShowTabletNavState(event.isDesktopSize);
            });
    }

    public ngOnInit() {
    }

    public ngOnDestroy(): void {
        this.viewPortSizeChangeSub.unsubscribe();
    }

    private checkShowTabletNavState( isDesktopSize: boolean ): void {
        this._showTabletNav = !isDesktopSize;
        this.cdRef.markForCheck();
    }
}
