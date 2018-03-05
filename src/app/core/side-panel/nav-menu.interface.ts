/**
 * nav-menu.interface
 */
import { InjectionToken } from '@angular/core';
import { NavMenuItemComponent } from './nav-menu-item.component';
import { Observable } from 'rxjs/Observable';

export interface NavMenu {

    expand: Observable<boolean>;

    expanded: boolean;

    level: number;

    selected: boolean;

    registerTrigger( trigger: NavMenuItemComponent ): void;

    toggle( val: boolean ): void;

    markMenuItemChecked(): void;
}

export const NAV_MENU = new InjectionToken<NavMenu>('NAV_ME');
