import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VIEWPORT_RULER_PROVIDER } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OwlRippleModule } from '../../npmdist/components/ripple';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { AppService } from './app.service';

import { GestureConfig } from '../../npmdist/owl-ng';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        HomeModule,
        OwlRippleModule,
    ],
    providers: [
        VIEWPORT_RULER_PROVIDER,
        AppService,
        {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
