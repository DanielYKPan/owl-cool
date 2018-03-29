/**
 * game-center.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game-center',
    templateUrl: './game-center.component.html',
    styleUrls: ['./game-center.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GameCenterComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {
    }
}
