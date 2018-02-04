/**
 * home.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'home',
            component: HomeComponent,
            data: {
                name: 'page-home',
                showSidePanel: false,
            }
        }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
