import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MemoryRoutingModule } from './memory-routing.module';
import { MemoryComponent } from './memory.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { AboutComponent } from './about/about.component';
import { GameShareModule } from '../share/share.module';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { reducers } from './store';
import { GameTileComponent } from './game-tile/game-tile.component';
import { GameTimerComponent } from './game-timer/game-timer.component';
import { GameService } from './store/game.service';

@NgModule({
    imports: [
        CommonModule,
        GameShareModule,
        MemoryRoutingModule,
        StoreModule.forFeature('memory', reducers),
    ],
    declarations: [
        MemoryComponent,
        HeaderComponent,
        BoardComponent,
        AboutComponent,
        BottomBarComponent,
        GameTileComponent,
        GameTimerComponent
    ],
    providers: [GameService]
})
export class MemoryModule {
}
