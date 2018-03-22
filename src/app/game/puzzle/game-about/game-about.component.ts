import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-game-about',
    templateUrl: './game-about.component.html',
    styleUrls: ['./game-about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameAboutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
