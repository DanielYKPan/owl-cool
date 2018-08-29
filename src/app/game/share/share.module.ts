/**
 * share.module
 */

import { NgModule } from '@angular/core';
import { GameSocialIconComponent } from './social-icon/game-social-icon.component';
import { GameHomeBtnComponent } from './home-btn/home-btn.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
    imports: [LazyLoadImageModule],
    exports: [GameSocialIconComponent, GameHomeBtnComponent, LazyLoadImageModule],
    declarations: [GameSocialIconComponent, GameHomeBtnComponent],
    providers: [],
})
export class GameShareModule {
}
