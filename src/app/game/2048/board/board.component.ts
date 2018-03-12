/**
 * board.component
 */

import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-game-2048-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class GameBoardComponent implements OnInit {

    @HostBinding('class.game-2048-board')
    get game2048BoardClass(): boolean {
        return true;
    }

    constructor() {
    }

    public ngOnInit() {
    }
}
