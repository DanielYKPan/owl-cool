import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaraokeComponent } from './karaoke.component';
import { KaraokeRoutingModule } from './karaoke.routing';
import { GameService } from './game.service';

@NgModule({
    imports: [
        CommonModule,
        KaraokeRoutingModule,
    ],
    declarations: [
        KaraokeComponent
    ],
    providers: [
        GameService
    ]
})
export class KaraokeModule {
}
