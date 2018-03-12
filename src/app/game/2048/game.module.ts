/**
 * game.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game.routing';
import { GameHeaderComponent } from './header/header.component';
import { GameBoardComponent } from './board/board.component';
import { GameAboutComponent } from './about/about.component';
import { ScoreBarComponent } from './board/score-bar.component';
import { GameShareModule } from '../share/share.module';

@NgModule({
    imports: [
        CommonModule,
        GameRoutingModule,
        GameShareModule,
    ],
    exports: [],
    declarations: [
        GameComponent,
        GameHeaderComponent,
        GameBoardComponent,
        GameAboutComponent,
        ScoreBarComponent,
    ],
    providers: [],
})
export class GameModule {
}
