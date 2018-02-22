/**
 * owl.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OwlComponent } from './owl.component';
import { OwlNGStartComponent } from './getting-start.component';

import { OwlNGAccordionComponent } from './accordion/accordion.component';
import { OwlNGBackTopComponent } from './backTop/back-top.component';
import { OwlNGCheckBoxComponent } from './checkBox/check-box.component';
import { OwlNGChipsComponent } from './chips/chips.component';
import { OwlNGDialogComponent } from './dialog/dialog.component';
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
import { OwlNGTooltipComponent } from './tooltip/tooltip.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: OwlComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'getting-start',
                    pathMatch: 'full'
                },
                {
                    path: 'getting-start',
                    component: OwlNGStartComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'getting-start',
                    },
                },
                {
                    path: 'accordion',
                    component: OwlNGAccordionComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'accordion',
                    },
                },
                {
                    path: 'back-top',
                    component: OwlNGBackTopComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'back-top',
                    },
                },
                {
                    path: 'checkbox',
                    component: OwlNGCheckBoxComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'checkbox',
                    },
                },
                {
                    path: 'chips',
                    component: OwlNGChipsComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'chips',
                    },
                },
                {
                    path: 'dialog',
                    component: OwlNGDialogComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'dialog',
                    },
                },
                {
                    path: 'form-field',
                    component: OwlNGFormFieldComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'form-field',
                    },
                },
                {
                    path: 'galleria',
                    component: OwlNGGalleriaComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'galleria',
                    },
                },
                {
                    path: 'input',
                    component: OwlNGInputComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'input',
                    },
                },
                {
                    path: 'mask',
                    component: OwlNGInputMaskComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'mask',
                    },
                },
                {
                    path: 'menu',
                    component: OwlNGMenuComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'menu',
                    },
                },
                {
                    path: 'notifier',
                    component: OwlNGNotifierComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'notifier',
                    },
                },
                {
                    path: 'radio',
                    component: OwlNGRadioComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'radio',
                    },
                },
                {
                    path: 'ripple-effect',
                    component: OwlNGRippleComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'ripple-effect',
                    },
                },
                {
                    path: 'select',
                    component: OwlNGSelectComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'select',
                    },
                },
                {
                    path: 'slider',
                    component: OwlNGSliderComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'slider',
                    },
                },
                {
                    path: 'sweet-alert',
                    component: OwlNGSweetAlertComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'sweet-alert',
                    },
                },
                {
                    path: 'switch',
                    component: OwlNGSwitchComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'switch',
                    },
                },
                {
                    path: 'tab-view',
                    component: OwlNGTabsComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'tab-view',
                    },
                },
                {
                    path: 'tooltip',
                    component: OwlNGTooltipComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'tooltip',
                    },
                },
            ]
        }
    ])],
    exports: [RouterModule]
})
export class OwlNGRoutingModule {
}
