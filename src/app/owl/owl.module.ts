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
import { OwlTabsModule } from '../../../npmdist/components/tabs';
import { CodeHighlightDirective } from './code-highlight.directive';

@NgModule({
    imports: [
        CommonModule,
        OwlNGRoutingModule,

        OwlRippleModule,
        OwlTabsModule,
    ],
    exports: [],
    declarations: [
        OwlComponent,
        CodeHighlightDirective,
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


