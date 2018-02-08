/**
 * owl.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OwlComponent } from './owl.component';
import { OwlNGStartComponent } from './getting-start.component';
import { OwlNGRippleComponent } from './ripple/ripple.component';
import { OwlNGTabsComponent } from './tabs/tabs.component';
import { OwlNGBackTopComponent } from './backTop/back-top.component';

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
                    path: 'ripple-effect',
                    component: OwlNGRippleComponent,
                    data: {
                        name: 'page-owlng',
                        showSidePanel: true,
                        animation: 'ripple-effect',
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
            ]
        }
    ])],
    exports: [RouterModule]
})
export class OwlNGRoutingModule {
}
