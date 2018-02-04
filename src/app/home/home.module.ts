/**
 * home.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
