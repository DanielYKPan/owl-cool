import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OwlRippleModule } from '../../npmdist/components/ripple';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        OwlRippleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
