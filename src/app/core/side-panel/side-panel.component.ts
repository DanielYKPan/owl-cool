/**
 * side-panel.component
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators/filter';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class SidePanelComponent implements OnInit, OnDestroy {

    private routerSub = Subscription.EMPTY;

    private _currentUrl: string;
    get currentUrl(): string {
        return this._currentUrl;
    }

    @HostBinding('class.layout-side-panel')
    get layoutSidePanelClass(): boolean {
        return true;
    }

    constructor( private router: Router,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
        this.routerSub = this.router.events
            .pipe(
                filter(e => e instanceof NavigationEnd)
            )
            .subscribe(( event: NavigationEnd ) => {
                this._currentUrl = event.url;
                this.cdRef.markForCheck();
            });
    }

    public ngOnDestroy(): void {
        this.routerSub.unsubscribe();
    }
}
