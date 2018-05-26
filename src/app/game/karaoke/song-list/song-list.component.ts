import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongInform } from '../models';

@Component({
    selector: 'app-game-karaoke-song-list',
    templateUrl: './song-list.component.html',
    styleUrls: ['./song-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongListComponent implements OnInit {

    @Input() songs: SongInform[];

    @Output() readonly select = new EventEmitter<SongInform>();

    constructor() {
    }

    public ngOnInit() {
    }

    public selectSong( event: any, song: SongInform ): void {
        this.select.emit(song);
        event.preventDefault();
    }
}
