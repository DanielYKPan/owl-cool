import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GameService } from './service/game.service';

@Component({
    selector: 'app-game-minesweeper',
    templateUrl: './minesweeper.component.html',
    styleUrls: ['./minesweeper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinesweeperComponent implements OnInit {

    constructor( private gameService: GameService ) {
    }

    public ngOnInit(): void {
    }

    public newGame(): void {
        this.gameService.newGame();
    }
}
