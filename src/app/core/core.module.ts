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

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        OwlRippleModule
    ],
    exports: [
        TopBarComponent,
        SidePanelComponent,
    ],
    declarations: [
        TopBarComponent,
        SidePanelComponent,
        SideNavComponent,
        SideNavItemComponent,
    ],
    providers: [],
})
export class CoreModule {
}
