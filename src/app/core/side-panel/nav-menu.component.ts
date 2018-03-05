/**
 * nav-menu.component
 */

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    forwardRef,
    HostBinding,
    OnInit,
    QueryList
} from '@angular/core';
import { NAV_MENU, NavMenu } from './nav-menu.interface';
import { NavMenuItemComponent } from './nav-menu-item.component';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss'],
    providers: [
        {provide: NAV_MENU, useExisting: NavMenuComponent}
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class NavMenuComponent implements OnInit, NavMenu {

    @ContentChildren(forwardRef(() => NavMenuItemComponent)) items: QueryList<NavMenuItemComponent>;

    private trigger: NavMenuItemComponent;

    private _expanded = false;
    get expanded(): boolean {
        return this._expanded;
    }

    get level(): number {
        return this.trigger ? this.trigger.level : 0;
    }

    get selected(): boolean {
        if (this.items && this.items.length) {
            return this.items.some(( item ) => {
                return item.isTrigger ?
                    item.triggerMenuItemSelected === true : item.selected === true;
            });
        } else {
            return false;
        }
    }

    private expand$ = new Subject<boolean>();

    get expand(): Observable<boolean> {
        return this.expand$.asObservable();
    }

    @HostBinding('class')
    get navMenu(): string {
        let cls = 'owl-nav-menu';

        cls += ' level-' + this.level;

        if (!!this.trigger) {
            cls += ' heading-children';

            cls += this._expanded ?
                ' expanded' : ' collapsed';
        }

        return cls;
    }

    constructor( private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
    }

    public registerTrigger( trigger: NavMenuItemComponent ): void {
        this.trigger = trigger;
    }

    public toggle( expanded: boolean ): void {
        if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expand$.next(this._expanded);
            this.cdRef.markForCheck();
        }
    }

    public markMenuItemChecked(): void {
        if (this.trigger) {
            this.trigger.markForCheck();
        }

        if (this.items) {
            this.items.forEach(( item ) => {
                item.markForCheck();
            });
        }
    }
}
