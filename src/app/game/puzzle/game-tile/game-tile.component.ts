import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { Tile } from '../store/tile.model';
import { positionToCoordination } from '../store/game.reducer';

@Component({
    selector: 'app-game-puzzle-tile',
    templateUrl: './game-tile.component.html',
    styleUrls: ['./game-tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTileComponent implements OnInit {

    @Input() photo: string;

    @Input() tile: Tile;

    @Input() frameSize: number;

    @Input() gameSize: number;

    @Input() showNumber: boolean;

    get size(): number {
        return this.frameSize / this.gameSize;
    }

    @HostBinding('class.game-puzzle-tile-blank')
    get gameTileBlankClass(): boolean {
        return this.tile.isBlank;
    }

    @HostBinding('style.width.px')
    get gameTileWidth(): number {
        return this.size;
    }

    @HostBinding('style.height.px')
    get gameTileHeight(): number {
        return this.size;
    }

    @HostBinding('style.transform')
    get gameTileTransform(): string {
        const coordination = positionToCoordination(this.tile.position, this.gameSize);
        const x = (coordination.x * this.size) + 'px';
        const y = (coordination.y * this.size) + 'px';
        return `translate(${x}, ${y})`;
    }

    @HostBinding('style.background-image')
    get gameTileBackgroundImage(): string {
        return 'url(/assets/images/games/puzzle/' + this.photo + ')';
    }

    @HostBinding('style.background-position')
    get gameTileBackgroundPosition(): string {
        const imageCoordination = positionToCoordination(this.tile.value, this.gameSize);
        const x = imageCoordination.x * this.size * -1;
        const y = imageCoordination.y * this.size * -1;

        return `${x}px ${y}px`;
    }

    @HostBinding('style.background-size')
    get gameTileBackgroundSize(): string {
        const size = this.size * this.gameSize;
        return `${size}px ${size}px`;
    }

    constructor() {
    }

    ngOnInit() {
    }
}
