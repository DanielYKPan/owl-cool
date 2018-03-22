import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
    selector: 'app-game-puzzle',
    templateUrl: './puzzle.component.html',
    styleUrls: ['./puzzle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PuzzleComponent implements OnInit {

    @HostBinding('class.game-puzzle')
    get gamePuzzleClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
