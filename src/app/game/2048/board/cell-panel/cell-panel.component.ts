import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SIZE } from '../../service/game.service';

@Component({
    selector: 'app-game-2048-cell-panel',
    templateUrl: './cell-panel.component.html',
    styleUrls: ['./cell-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})
export class CellPanelComponent implements OnInit {

    @Input() cells: string[];

    @Input() size: number;

    constructor() {
    }

    ngOnInit() {
    }

    public getCellTransformStyle( index: number ): string {
        const x = (index % SIZE) * 100 + '%';
        const y = Math.floor(index / SIZE) * 100 + '%';
        return `translate(${x}, ${y})`;
    }
}
