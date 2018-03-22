import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-puzzle-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameControlComponent implements OnInit {

    @Input() level: number;

    @Input() showNumber = false;

    @Output() showNumberChange = new EventEmitter<boolean>();

    @Output() levelChange = new EventEmitter<number>();

    @Output() clickShuffle = new EventEmitter<any>();

    constructor() {
    }

    public ngOnInit() {
    }

    public handleShowNumberModelChange( value: boolean ): void {
        this.showNumber = value;
        this.showNumberChange.emit(value);
    }

    public handleLevelModelChange( value: number ): void {
        this.level = value;
        this.levelChange.emit(value);
    }

    public handleClickOnShuffleBtn(): void {
        this.clickShuffle.emit(null);
    }

}
