/**
 * owl.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OwlComponent } from './owl.component';
import { OwlNGStartComponent } from './getting-start.component';

import { OwlNGBackTopComponent } from './backTop/back-top.component';
import { OwlNGChipsComponent } from './chips/chips.component';
import { OwlNGFormFieldComponent } from './form-field/form-field.component';
import { OwlNGInputComponent } from './input/input.component';
import { OwlNGInputMaskComponent } from './inputMask/input-mask.component';
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
                    path: 'back-top',
                    component: OwlNGBackTopComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'back-top',
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
