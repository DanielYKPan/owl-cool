/**
 * about.component
 */

import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-game-2048-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class GameAboutComponent implements OnInit {

    @HostBinding('class.game-2048-about')
    get game2048AboutClass(): boolean {
        return true;
    }

    constructor() {
    }

    public ngOnInit() {
    }
}
