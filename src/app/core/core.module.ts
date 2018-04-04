/**
 * core.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { RouteProcessModule } from './route-process/route-process.module';
import { NavMenuItemComponent } from './side-panel/nav-menu-item.component';
import { NavMenuComponent } from './side-panel/nav-menu.component';

import { OwlRippleModule } from '../../../npmdist/owl-ng';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
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
