import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GameService } from './store/game.service';

@Component({
    selector: 'app-game-memory',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoryComponent implements OnInit {

    constructor(private gameService: GameService) {
    }

    ngOnInit() {
    }

    public newGame(): void {
        this.gameService.newGame();
    }
}
