/**
 * route-process.module
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouteProcessService } from './route-process.service';
import { RouteProcessBarComponent } from './route-process-bar.component';

@NgModule({
    imports: [CommonModule, OverlayModule],
    exports: [],
    declarations: [RouteProcessBarComponent],
    providers: [RouteProcessService],
    entryComponents: [RouteProcessBarComponent]
})
export class RouteProcessModule {
}
