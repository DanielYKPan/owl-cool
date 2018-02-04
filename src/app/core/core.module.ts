/**
 * core.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { OwlRippleModule } from '../../../npmdist/components/ripple';

@NgModule({
    imports: [CommonModule, OwlRippleModule],
    exports: [
        TopBarComponent,
        SidePanelComponent,
    ],
    declarations: [
        TopBarComponent,
        SidePanelComponent,
    ],
    providers: [],
})
export class CoreModule {
}
