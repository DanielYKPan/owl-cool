/**
 * nav-menu-item.component
 */

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    OnDestroy,
    OnInit
} from '@angular/core';
import { NAV_MENU, NavMenu } from './nav-menu.interface';
import { filter } from 'rxjs/operators/filter';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'app-nav-menu-item',
    templateUrl: './nav-menu-item.component.html',
    styleUrls: ['./nav-menu-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class NavMenuItemComponent implements OnInit, OnDestroy {

    private routerSub = Subscription.EMPTY;
    private subMenuExpandSub = Subscription.EMPTY;
    private parentMenuExpandSub = Subscription.EMPTY;

    private _menu: NavMenu;
    @Input('triggerFor')
    get menu(): NavMenu {
        return this._menu;
    }

    set menu( val: NavMenu ) {
        this._menu = val;
        this._menu.registerTrigger(this);
    }

    @Input() name: string;

    @Input() slug: string;

    get expanded(): boolean {
        return this._menu && this._menu.expanded;
    }

    get level(): number {
        return this.parent ? this.parent.level + 1 : 0;
    }

    get isTrigger(): boolean {
        return !!this._menu;
    }

    private _selected = false;
    get selected(): boolean {
        return this._selected;
    }

    get triggerMenuItemSelected(): boolean {
        return this._menu && this._menu.selected;
    }

    constructor( @Inject(NAV_MENU) private parent: NavMenu,
                 private cdRef: ChangeDetectorRef,
                 private router: Router ) {
    }

    public ngOnInit() {
        if (!this.isTrigger) {
            this.routerSub = this.router.events
                .pipe(
                    filter(e => e instanceof NavigationEnd)
                )
                .subscribe(( event: NavigationEnd ) => {
                    this._selected = !!this.slug && event.url.includes(this.slug);

                    // if the item is selected,
                    // we make sure its parent menu is expanded when the route changed.
                    if (this._selected) {
                        this.parent.toggle(true);
                    }

                    this.parent.markMenuItemChecked();
                    this.markForCheck();
                });
        } else {
            this.subMenuExpandSub = this._menu.expand.subscribe(( val: boolean ) => {
                // if the trigger's menu is expanded,
                // we make sure their parent menu is expanded too.
                if (val) {
                    this.parent.toggle(true);
                }

                this.parent.markMenuItemChecked();
                this.markForCheck();
            });
        }

        this.parentMenuExpandSub = this.parent.expand.subscribe(( val: boolean ) => {
            if (!val) {
                // if the parent menu is collapsed,
                // we make sure its sub menu is collapsed too.
                if (this._menu) {
                    this._menu.toggle(false);
                }
            } else {
                // if the parent menu is expanded and its sub menu has selected item,
                // we make sure that sub menu is expanded.
                if (this.triggerMenuItemSelected) {
                    this._menu.toggle(true);
                }
            }

            this.parent.markMenuItemChecked();
            this.markForCheck();
        });
    }

    public ngOnDestroy(): void {
        this.routerSub.unsubscribe();
        this.subMenuExpandSub.unsubscribe();
        this.parentMenuExpandSub.unsubscribe();
    }

    public clickTriggerButton( event: any ): void {
        if (this._menu) {
            this._menu.toggle(!this.expanded);
        }
        event.preventDefault();
    }

    public markForCheck(): void {
        this.cdRef.markForCheck();
    }
}
