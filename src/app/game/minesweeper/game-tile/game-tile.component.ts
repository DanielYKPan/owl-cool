import {
    Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, HostListener, Output,
    EventEmitter
} from '@angular/core';
import { Tile } from '../store/tile.model';

@Component({
    selector: 'app-game-minesweeper-tile',
    templateUrl: './game-tile.component.html',
    styleUrls: ['./game-tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTileComponent implements OnInit {

    @Input() tile: Tile;

    @Output() clickTile = new EventEmitter<Tile>();

    @Output() rightClickTile = new EventEmitter<Tile>();

    @HostBinding('class.game-minesweeper-tile')
    get gameMinesweeperTileClass(): boolean {
        return true;
    }

    @HostBinding('class.game-minesweeper-tile-unknown')
    get gameMinesweeperTileUnknownClass(): boolean {
        return !this.tile.Revealed;
    }

    @HostBinding('class.game-minesweeper-tile-mine-hit')
    get gameMinesweeperTileMineHitClass(): boolean {
        return this.tile.Content === 'mine-hit';
    }

    @HostBinding('class.game-minesweeper-tile-flag-wrong')
    get gameMinesweeperTileFlagWrongClass(): boolean {
        return this.tile.Content === 'flag-wrong';
    }

    constructor() {
    }

    ngOnInit() {
    }

    @HostListener('click', ['$event'])
    public handleClickOnHost( event: MouseEvent ): void {
        this.clickTile.emit(this.tile);
        event.preventDefault();
    }

    @HostListener('contextmenu', ['$event'])
    public handleRightClickOnHost( event: MouseEvent ): void {
        this.rightClickTile.emit(this.tile);
        event.preventDefault();
    }
}
