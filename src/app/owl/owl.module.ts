/**
 * owl.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlComponent } from './owl.component';
import { OwlNGRoutingModule } from './owl.routing';
import { OwlNGStartComponent } from './getting-start.component';
import { OwlNGIntroductionComponent } from './owl-introduction.component';
import { OwlIntroductionService } from './owl-introduction.service';
import { CodeHighlightDirective } from './code-highlight.directive';

import { OwlNGBackTopComponent } from './backTop/back-top.component';
import { OwlNGInputComponent } from './input/input.component';
import { OwlNGRippleComponent } from './ripple/ripple.component';
import { OwlNGSelectComponent } from './select/select.component';
import { OwlNGTabsComponent } from './tabs/tabs.component';
import { OwlNGTooltipComponent } from './tooltip/tooltip.component';

import {
    OwlBackTopBtnModule,
    OwlChipsModule,
    OwlFormFieldModule,
    OwlInputModule,
    OwlRippleModule,
    OwlSelectModule,
    OwlTabsModule,
    OwlTooltipModule,
} from '../../../npmdist/owl-ng';
import { OwlNGFormFieldComponent } from './form-field/form-field.component';
import { OwlNGChipsComponent } from './chips/chips.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OwlNGRoutingModule,

        OwlBackTopBtnModule,
        OwlChipsModule,
        OwlFormFieldModule,
        OwlInputModule,
        OwlRippleModule,
        OwlSelectModule,
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
        OwlNGChipsComponent,
        OwlNGFormFieldComponent,
        OwlNGInputComponent,
        OwlNGRippleComponent,
        OwlNGSelectComponent,
        OwlNGTabsComponent,
        OwlNGTooltipComponent,
    ],
    providers: [
        OwlIntroductionService
    ],
})
export class OwlNGModule {
}


