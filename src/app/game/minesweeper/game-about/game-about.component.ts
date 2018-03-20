import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
    selector: 'app-game-minesweeper-about',
    templateUrl: './game-about.component.html',
    styleUrls: ['./game-about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})
export class GameAboutComponent implements OnInit {

    @HostBinding('class.game-minesweeper-about')
    get gameMinesweeperAboutClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
