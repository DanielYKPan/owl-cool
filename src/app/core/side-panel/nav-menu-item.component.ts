/**
 * nav-menu-item.component
 */

import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit,
    Output
} from '@angular/core';
import { NavMenuComponent } from './nav-menu.component';

@Component({
    moduleId: module.id,
    selector: 'app-nav-menu-item',
    templateUrl: './nav-menu-item.component.html',
    styleUrls: ['./nav-menu-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class NavMenuItemComponent implements OnInit {

    private _expanded = false;
    get expanded(): boolean {
        return this._expanded;
    }

    private _level: number;
    get level(): number {
        return this._level;
    }

    private _menu: NavMenuComponent;
    @Input('triggerFor')
    get menu(): NavMenuComponent {
        return this._menu;
    }

    set menu( val: NavMenuComponent ) {
        this._menu = val;
        this._menu.registerTrigger(this);
    }

    @Input() name: string;

    @Input() slug: string;

    @Output() expand = new EventEmitter<boolean>();

    @Output() select = new EventEmitter<boolean>();

    get isTrigger(): boolean {
        return !!this._menu;
    }

    get parent(): NavMenuComponent {
        return this.parentMenu;
    }

    constructor( private parentMenu: NavMenuComponent,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
        this._level = this.parentMenu.level + 1;

        this.parentMenu.expanded().subscribe(( val: boolean ) => {
            if (val === false) {
                this.closeSubMenu();
            }
        });

        this.parentMenu.urlChange.subscribe(( val: string ) => {
            if (this.slug && val.includes(this.slug)) {
                this.parentMenu.expand();
            }
        });
    }

    public clickTriggerButton( event: any ): void {
        this._expanded = !this._expanded;
        this.expand.next(this._expanded);
        event.preventDefault();
    }

    public closeSubMenu(): void {
        if (this._expanded) {
            this._expanded = false;
            this.expand.next(this._expanded);
            this.cdRef.markForCheck();
        }
    }

    public openSubMenu(): void {
        if (!this._expanded) {
            this._expanded = true;
            this.parentMenu.expand();
            this.expand.next(this._expanded);
            this.cdRef.markForCheck();
        }
    }
}
