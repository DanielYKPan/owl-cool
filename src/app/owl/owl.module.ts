/**
 * owl.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlComponent } from './owl.component';
import { OwlNGRoutingModule } from './owl.routing';
import { OwlNGStartComponent } from './getting-start.component';
import { OwlNGIntroductionComponent } from './owl-introduction.component';
import { OwlIntroductionService } from './owl-introduction.service';
import { OwlNGRippleComponent } from './ripple/ripple.component';

import { OwlRippleModule } from '../../../npmdist/components/ripple';

@NgModule({
    imports: [
        CommonModule,
        OwlNGRoutingModule,
        OwlRippleModule
    ],
    exports: [],
    declarations: [
        OwlComponent,
        OwlNGIntroductionComponent,
        OwlNGStartComponent,

        OwlNGRippleComponent,
    ],
    providers: [
        OwlIntroductionService
    ],
})
export class OwlNGModule {
}


