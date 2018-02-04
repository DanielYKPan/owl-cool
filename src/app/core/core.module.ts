/**
 * core.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { OwlRippleModule } from '../../../npmdist/components/ripple';

@NgModule({
    imports: [CommonModule, OwlRippleModule],
    exports: [TopBarComponent],
    declarations: [TopBarComponent],
    providers: [],
})
export class CoreModule {
}
