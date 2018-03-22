import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { PuzzleRoutingModule } from './puzzle-routing.module';
import { PuzzleComponent } from './puzzle.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameAboutComponent } from './game-about/game-about.component';
import { GameShareModule } from '../share/share.module';
import { GameGalleryComponent } from './game-gallery/game-gallery.component';
import { reducers } from './store';
import { GameTileComponent } from './game-tile/game-tile.component';
import { GameControlComponent } from './game-control/game-control.component';

import { OwlCheckBoxModule, OwlRadioModule } from '../../../../npmdist';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PuzzleRoutingModule,
        GameShareModule,
        OwlCheckBoxModule,
        OwlRadioModule,
        StoreModule.forFeature('puzzle', reducers),
    ],
    declarations: [
        PuzzleComponent,
        TopBarComponent,
        GameBoardComponent,
        GameAboutComponent,
        GameGalleryComponent,
        GameTileComponent,
        GameControlComponent
    ],
})
export class PuzzleModule {
}
