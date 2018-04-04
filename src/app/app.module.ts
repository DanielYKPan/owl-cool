import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VIEWPORT_RULER_PROVIDER } from '@angular/cdk/scrolling';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { AppService } from './app.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { OwlRippleModule, GestureConfig } from '../../npmdist/owl-ng';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule,
        HomeModule,
        AppRoutingModule,
        OwlRippleModule,

        StoreModule.forRoot({}),
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
