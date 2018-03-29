import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-game-snake',
    templateUrl: './snake.component.html',
    styleUrls: ['./snake.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnakeComponent implements OnInit {

    constructor() {
    }

    public ngOnInit() {
    }

}
