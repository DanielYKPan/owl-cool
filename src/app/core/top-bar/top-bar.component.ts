/**
 * top-bar.component
 */

import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit,
    Output
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class TopBarComponent implements OnInit, OnDestroy {

    @Input() hideHamburger: boolean;
    @Output() hamburgerClick = new EventEmitter<boolean>();

    private _showTopBarNav: boolean;
    get showTopBarNav(): boolean {
        return this._showTopBarNav;
    }

    private viewPostSizeChangeSub = Subscription.EMPTY;

    @HostBinding('class.layout-top-bar')
    get layoutTopBarClass(): boolean {
        return true;
    }

    constructor( private appService: AppService,
                 private cdRef: ChangeDetectorRef ) {
        this.viewPostSizeChangeSub = this.appService.viewPortSizeChange
            .subscribe(( event: any ) => {
                this.checkTobBarNavState(event.isDesktopSize);
            });
    }

    public ngOnInit() {
    }

    public ngOnDestroy(): void {
        this.viewPostSizeChangeSub.unsubscribe();
    }

    public clickHamburger( event: any ): void {
        this.hamburgerClick.emit(true);
        event.preventDefault();
    }

    private checkTobBarNavState( isDesktopSize: boolean ): void {
        this._showTopBarNav = isDesktopSize;
        this.cdRef.markForCheck();
    }
}
