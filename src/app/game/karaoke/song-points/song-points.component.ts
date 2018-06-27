import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game-karaoke-song-points',
    templateUrl: './song-points.component.html',
    styleUrls: ['./song-points.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongPointsComponent implements OnInit {

    constructor() {
    }

    public ngOnInit() {
    }

}
