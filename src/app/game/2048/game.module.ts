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
import { GameService } from './service/game.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { CellPanelComponent } from './board/cell-panel/cell-panel.component';
import { TilePanelComponent } from './tile-panel/tile-panel.component';
import { OverPanelComponent } from './over-panel/over-panel.component';

@NgModule({
    imports: [
        CommonModule,
        GameRoutingModule,
        GameShareModule,

        StoreModule.forFeature('2048', reducers),
    ],
    exports: [],
    declarations: [
        GameComponent,
        GameHeaderComponent,
        GameBoardComponent,
        GameAboutComponent,
        ScoreBarComponent,
        CellPanelComponent,
        TilePanelComponent,
        OverPanelComponent,
    ],
    providers: [
        GameService,
    ],
})
export class GameModule {
}
