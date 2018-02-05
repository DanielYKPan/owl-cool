/**
 * owl.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlComponent } from './owl.component';
import { OwlNGRoutingModule } from './owl.routing';
import { OwlNGStartComponent } from './getting-start.component';

@NgModule({
    imports: [
        CommonModule,
        OwlNGRoutingModule,
    ],
    exports: [],
    declarations: [
        OwlComponent,
        OwlNGStartComponent,
    ],
    providers: [],
})
export class OwlNGModule {
}


