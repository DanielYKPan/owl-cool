import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KaraokeComponent } from './karaoke.component';
import { KaraokeRoutingModule } from './karaoke.routing';
import { GameService } from './game.service';
import { SongListComponent } from './song-list/song-list.component';
import { SongPlayerComponent } from './song-player/song-player.component';
import { SongLyricsComponent } from './song-lyrics/song-lyrics.component';
import { SongAudioComponent } from './song-audio/song-audio.component';
import { TimeFormatPipe } from './song-audio/time-format.pipe';
import { SongSpeechDirective } from './song-speech/song-speech.directive';
import { SongPointsComponent } from './song-points/song-points.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        KaraokeRoutingModule,
    ],
    declarations: [
        KaraokeComponent,
        SongListComponent,
        SongPlayerComponent,
        SongLyricsComponent,
        SongAudioComponent,
        TimeFormatPipe,
        SongSpeechDirective,
        SongPointsComponent,
    ],
    providers: [
        GameService
    ]
})
export class KaraokeModule {
}
