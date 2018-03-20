import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinesweeperRoutingModule } from './minesweeper-routing.module';
import { MinesweeperComponent } from './minesweeper.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameHeaderComponent } from './game-header/game-header.component';
import { GameAboutComponent } from './game-about/game-about.component';
import { GameShareModule } from '../share/share.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { GameService } from './service/game.service';
import { GameTileComponent } from './game-tile/game-tile.component';

@NgModule({
    imports: [
        CommonModule,
        GameShareModule,
        MinesweeperRoutingModule,
        StoreModule.forFeature('minesweeper', reducers),
    ],
    declarations: [
        MinesweeperComponent,
        GameBoardComponent,
        GameHeaderComponent,
        GameAboutComponent,
        GameTileComponent
    ],
    providers: [
        GameService,
    ]
})
export class MinesweeperModule {
}
