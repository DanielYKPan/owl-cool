import {
    Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, Output, EventEmitter
} from '@angular/core';
import { Tile } from '../store/tile.model';

@Component({
    selector: 'app-game-memory-tile',
    templateUrl: './game-tile.component.html',
    styleUrls: ['./game-tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTileComponent implements OnInit {

    @Input() tile: Tile;

    @Input() tileSize: number;

    @Output() clickTile = new EventEmitter<Tile>();

    @HostBinding('style.width.px')
    get gameTileWidth(): number {
        return this.tileSize;
    }

    @HostBinding('style.height.px')
    get gameTileHeight(): number {
        return this.tileSize * 10 / 9;
    }

    @HostBinding('style.padding.px')
    get gameTilePadding(): number {
        return this.tileSize * .1 < 8 ?
            this.tileSize * .1 : 8;
    }

    constructor() {
    }

    public ngOnInit() {
    }

    public handleClickOnTile(): void {
        this.clickTile.emit(this.tile);
    }
}
