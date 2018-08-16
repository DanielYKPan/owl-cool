/**
 * share.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconComponent } from './social-icon/social-icon.component';

@NgModule({
    imports: [CommonModule],
    exports: [SocialIconComponent],
    declarations: [SocialIconComponent],
    providers: [],
})
export class ShareModule {
}
