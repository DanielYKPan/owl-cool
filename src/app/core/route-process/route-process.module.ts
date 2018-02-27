/**
 * route-process.module
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouteProcessService } from './route-process.service';
import { RouteProcessBarComponent } from './route-process-bar.component';

@NgModule({
    imports: [CommonModule, OverlayModule],
    exports: [RouteProcessBarComponent],
    declarations: [RouteProcessBarComponent],
    providers: [RouteProcessService],
})
export class RouteProcessModule {
    constructor( private router: Router,
                 private routeProcess: RouteProcessService ) {
        this.router.events
            .subscribe(( event: any ) => {
                if (event instanceof NavigationStart) {
                    this.routeProcess.start();
                } else if (
                    event instanceof NavigationEnd ||
                    event instanceof NavigationError ||
                    event instanceof NavigationCancel
                ) {
                    this.routeProcess.complete();
                }
            });
    }
}
