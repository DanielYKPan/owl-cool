/**
 * share.module
 */

import { NgModule } from '@angular/core';
import { GameSocialIconComponent } from './social-icon/game-social-icon.component';
import { GameHomeBtnComponent } from './home-btn/home-btn.component';

@NgModule({
    imports: [],
    exports: [GameSocialIconComponent, GameHomeBtnComponent],
    declarations: [GameSocialIconComponent, GameHomeBtnComponent],
    providers: [],
})
export class GameShareModule {
}
