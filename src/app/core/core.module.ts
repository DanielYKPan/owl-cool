/**
 * core.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { RouteProcessModule } from './route-process/route-process.module';
import { NavMenuItemComponent } from './side-panel/nav-menu-item.component';
import { NavMenuComponent } from './side-panel/nav-menu.component';
import { AppRoutingModule } from '../app.routing';

import { OwlRippleModule } from '../../../npmdist/components/ripple';

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
        NavMenuComponent,
        NavMenuItemComponent,
    ],
    providers: [],
})
export class CoreModule {
}
