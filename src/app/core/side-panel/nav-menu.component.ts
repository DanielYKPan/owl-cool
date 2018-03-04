/**
 * nav-menu.component
 */

import {
    AfterViewInit, ChangeDetectionStrategy, Component, HostBinding, Input, OnInit
} from '@angular/core';
import { NavMenuItemComponent } from './nav-menu-item.component';
import { Observable } from 'rxjs/Observable';
import { never } from 'rxjs/observable/never';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class NavMenuComponent implements OnInit, AfterViewInit {

    private trigger: NavMenuItemComponent;

    public level = 0;

    private _currentUrl: string;
    @Input()
    get currentUrl(): string {
        if (this._currentUrl) {
            return this._currentUrl;
        } else if (this.trigger) {
            return this.trigger.parent.currentUrl;
        } else {
            return null;
        }
    }

    set currentUrl( val: string ) {
        this._currentUrl = val;
        this.urlChange$.next(this._currentUrl);
    }

    @HostBinding('class')
    get navMenu(): string {
        return 'level-' + this.level;
    }

    @HostBinding('class.owl-nav-menu')
    get owlNavMenu(): boolean {
        return true;
    }

    @HostBinding('class.heading-children')
    get navMenuHeadingChildrenClass(): boolean {
        return !!this.trigger;
    }

    @HostBinding('class.expanded')
    get navMenuHeadingChildrenExpandedClass(): boolean {
        return !!this.trigger && this.trigger.expanded;
    }

    @HostBinding('class.collapsed')
    get navMenuHeadingChildrenCollapsedClass(): boolean {
        return !!this.trigger && !this.trigger.expanded;
    }

    private urlChange$ = new Subject<string>();

    get urlChange(): Observable<string> {
        if (this.trigger) {
            return this.trigger.parent.urlChange;
        } else {
            return this.urlChange$.asObservable();
        }
    }

    constructor() {
    }

    public ngOnInit() {
        if (this.trigger) {
            this.level = this.trigger.level;
        }
    }

    public ngAfterViewInit(): void {
    }

    public registerTrigger( trigger: NavMenuItemComponent ): void {
        this.trigger = trigger;
    }

    public expanded(): Observable<boolean> {
        if (this.trigger) {
            return this.trigger.expand;
        } else {
            return never();
        }
    }

    public expand(): void {
        if (this.trigger) {
            this.trigger.openSubMenu();
        }
    }
}
