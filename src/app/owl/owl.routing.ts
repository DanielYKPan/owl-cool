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
import { OwlNGFormFieldComponent } from './form-field/form-field.component';
import { OwlNGInputComponent } from './input/input.component';
import { OwlNGInputMaskComponent } from './inputMask/input-mask.component';
import { OwlNGRadioComponent } from './radio/radio.component';
import { OwlNGRippleComponent } from './ripple/ripple.component';
import { OwlNGSelectComponent } from './select/select.component';
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
                    path: 'form-field',
                    component: OwlNGFormFieldComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'form-field',
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
