/**
 * core.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SideNavComponent } from './side-panel/side-nav.component';
import { SideNavItemComponent } from './side-panel/side-nav-item.component';
import { AppRoutingModule } from '../app.routing';

import { OwlRippleModule } from '../../../npmdist/components/ripple';
import { RouteProcessModule } from './route-process/route-process.module';
import { NavMenuItemComponent } from './side-panel/nav-menu-item.component';
import { NavMenuComponent } from './side-panel/nav-menu.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        RouteProcessModule,
        OwlRippleModule
    ],
    exports: [
        RouteProcessModule,
        TopBarComponent,
        SidePanelComponent,
    ],
    declarations: [
        TopBarComponent,
        SidePanelComponent,
        SideNavComponent,
        SideNavItemComponent,

        NavMenuComponent,
        NavMenuItemComponent,
    ],
    providers: [],
})
export class CoreModule {
}
