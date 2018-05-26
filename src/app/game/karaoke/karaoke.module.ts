import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KaraokeComponent } from './karaoke.component';
import { KaraokeRoutingModule } from './karaoke.routing';
import { GameService } from './game.service';
import { SongListComponent } from './song-list/song-list.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        KaraokeRoutingModule,
    ],
    declarations: [
        KaraokeComponent,
        SongListComponent
    ],
    providers: [
        GameService
    ]
})
export class KaraokeModule {
}
