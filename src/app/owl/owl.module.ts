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

import { OwlNGAccordionComponent } from './accordion/accordion.component';
import { OwlNGBackTopComponent } from './backTop/back-top.component';
import { OwlNGChipsComponent } from './chips/chips.component';
import { OwlNGFormFieldComponent } from './form-field/form-field.component';
import { OwlNGInputComponent } from './input/input.component';
import { OwlNGInputMaskComponent } from './inputMask/input-mask.component';
import { OwlNGRippleComponent } from './ripple/ripple.component';
import { OwlNGSelectComponent } from './select/select.component';
import { OwlNGTabsComponent } from './tabs/tabs.component';
import { OwlNGTooltipComponent } from './tooltip/tooltip.component';

import {
    OwlAccordionModule,
    OwlBackTopBtnModule,
    OwlChipsModule,
    OwlFormFieldModule,
    OwlInputModule,
    OwlInputMaskModule,
    OwlRippleModule,
    OwlSelectModule,
    OwlTabsModule,
    OwlTooltipModule,
} from '../../../npmdist/owl-ng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OwlNGRoutingModule,

        OwlAccordionModule,
        OwlBackTopBtnModule,
        OwlChipsModule,
        OwlFormFieldModule,
        OwlInputModule,
        OwlInputMaskModule,
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

        OwlNGAccordionComponent,
        OwlNGBackTopComponent,
        OwlNGChipsComponent,
        OwlNGFormFieldComponent,
        OwlNGInputComponent,
        OwlNGInputMaskComponent,
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


