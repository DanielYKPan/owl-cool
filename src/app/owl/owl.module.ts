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
import { OwlNGCheckBoxComponent } from './checkBox/check-box.component';
import { OwlNGChipsComponent } from './chips/chips.component';
import { OwlNGColorPickerComponent } from './color-picker/color-picker.component';
import { OwlNGDialogComponent } from './dialog/dialog.component';
import { OwlNGDummyDialogComponent } from './dialog/dummy-dialog.component';
import { OwlNGFormFieldComponent } from './form-field/form-field.component';
import { OwlNGGalleriaComponent } from './galleria/galleria.component';
import { OwlNGInputComponent } from './input/input.component';
import { OwlNGInputMaskComponent } from './inputMask/input-mask.component';
import { OwlNGMenuComponent } from './menu/menu.component';
import { OwlNGNotifierComponent } from './notifier/notifier.component';
import { OwlNGRadioComponent } from './radio/radio.component';
import { OwlNGRippleComponent } from './ripple/ripple.component';
import { OwlNGSelectComponent } from './select/select.component';
import { OwlNGSliderComponent } from './slider/slider.component';
import { OwlNGSweetAlertComponent } from './sweetAlert/sweet-alert.component';
import { OwlNGSwitchComponent } from './switch/switch.component';
import { OwlNGTabsComponent } from './tabs/tabs.component';
import { OwlNGTimerComponent } from './timer/timer.component';
import { OwlNGTooltipComponent } from './tooltip/tooltip.component';

import {
    OwlAccordionModule,
    OwlBackTopBtnModule,
    OwlCheckBoxModule,
    OwlChipsModule,
    OwlColorPickerModule,
    OwlDialogModule,
    OwlFormFieldModule,
    OwlGalleriaModule,
    OwlInputModule,
    OwlInputMaskModule,
    OwlMenuModule,
    OwlNotifierModule,
    OwlRadioModule,
    OwlRippleModule,
    OwlSelectModule,
    OwlSliderModule,
    OwlSweetAlertModule,
    OwlSwitchModule,
    OwlTabsModule,
    OwlTimerModule,
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
        OwlCheckBoxModule,
        OwlChipsModule,
        OwlColorPickerModule,
        OwlDialogModule,
        OwlFormFieldModule,
        OwlGalleriaModule,
        OwlInputModule,
        OwlInputMaskModule,
        OwlMenuModule,
        OwlNotifierModule,
        OwlRadioModule,
        OwlRippleModule,
        OwlSelectModule,
        OwlSliderModule,
        OwlSweetAlertModule,
        OwlSwitchModule,
        OwlTabsModule,
        OwlTimerModule,
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
        OwlNGCheckBoxComponent,
        OwlNGChipsComponent,
        OwlNGColorPickerComponent,
        OwlNGDialogComponent,
        OwlNGDummyDialogComponent,
        OwlNGFormFieldComponent,
        OwlNGGalleriaComponent,
        OwlNGInputComponent,
        OwlNGInputMaskComponent,
        OwlNGMenuComponent,
        OwlNGNotifierComponent,
        OwlNGRadioComponent,
        OwlNGRippleComponent,
        OwlNGSelectComponent,
        OwlNGSliderComponent,
        OwlNGSweetAlertComponent,
        OwlNGSwitchComponent,
        OwlNGTabsComponent,
        OwlNGTimerComponent,
        OwlNGTooltipComponent,
    ],
    providers: [
        OwlIntroductionService
    ],
    entryComponents: [OwlNGDummyDialogComponent]
})
export class OwlNGModule {
}


