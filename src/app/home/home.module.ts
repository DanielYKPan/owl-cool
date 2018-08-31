/**
 * home.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ShareModule } from '../share/share.module';
import { OwlDialogModule, OwlTooltipModule } from 'owl-ng';
import { ContactDialogComponent } from './contact-dialog.component';
import { SkillDialogComponent } from './skill-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        ShareModule,
        HomeRoutingModule,

        OwlTooltipModule,
        OwlDialogModule,
    ],
    exports: [],
    declarations: [HomeComponent, ContactDialogComponent, SkillDialogComponent],
    providers: [],
    entryComponents: [ContactDialogComponent, SkillDialogComponent]
})
export class HomeModule {
}
