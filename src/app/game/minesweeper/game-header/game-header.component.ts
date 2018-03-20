import { Component, OnInit, ChangeDetectionStrategy, HostBinding, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-game-minesweeper-header',
    templateUrl: './game-header.component.html',
    styleUrls: ['./game-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})
export class GameHeaderComponent implements OnInit {

    @Output() public startNewGame = new EventEmitter<any>();

    @HostBinding('class.game-minesweeper-header')
    get gameMinesweeperHeaderClass(): boolean {
        return true;
    }

    constructor( private router: Router,
                 private route: ActivatedRoute ) {
    }

    ngOnInit() {
    }

    public newGame(): void {
        if (this.router.url === '/games/minesweeper') {
            this.startNewGame.emit(true);
        } else {
            this.router.navigate(['./'], {relativeTo: this.route});
        }
    }

    public checkAbout() {
        this.router.navigate(['./about'], {relativeTo: this.route});
    }
}
