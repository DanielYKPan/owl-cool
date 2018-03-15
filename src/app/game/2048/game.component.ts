/**
 * game.component
 */

import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from './service/game.service';

@Component({
    moduleId: module.id,
    selector: 'app-game-2048',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class GameComponent implements OnInit {

    @HostBinding('class.layout-content-game')
    get layoutContentGameClass(): boolean {
        return true;
    }

    @HostBinding('class.game-2048')
    get game2048Class(): boolean {
        return true;
    }

    constructor(private gameService: GameService) {
    }

    public ngOnInit() {
        this.newGame();
    }

    public newGame(): void {
        this.gameService.newGame();
    }
}
