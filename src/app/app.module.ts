import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VIEWPORT_RULER_PROVIDER } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OwlRippleModule } from '../../npmdist/components/ripple';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { AppService } from './app.service';

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
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
