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
import { CodeHighlightDirective } from './code-highlight.directive';

import { OwlNGBackTopComponent } from './backTop/back-top.component';
import { OwlNGRippleComponent } from './ripple/ripple.component';
import { OwlNGTabsComponent } from './tabs/tabs.component';
import { OwlNGTooltipComponent } from './tooltip/tooltip.component';

import {
    OwlBackTopBtnModule,
    OwlRippleModule,
    OwlTabsModule,
    OwlTooltipModule,
} from '../../../npmdist/owl-ng';

@NgModule({
    imports: [
        CommonModule,
        OwlNGRoutingModule,

        OwlBackTopBtnModule,
        OwlRippleModule,
        OwlTabsModule,
        OwlTooltipModule,
    ],
    exports: [],
    declarations: [
        OwlComponent,
        CodeHighlightDirective,
        OwlNGIntroductionComponent,
        OwlNGStartComponent,

        OwlNGBackTopComponent,
        OwlNGRippleComponent,
        OwlNGTabsComponent,
        OwlNGTooltipComponent,
    ],
    providers: [
        OwlIntroductionService
    ],
})
export class OwlNGModule {
}


