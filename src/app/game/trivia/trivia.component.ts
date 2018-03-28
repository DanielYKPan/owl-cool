import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-game-trivia',
    templateUrl: './trivia.component.html',
    styleUrls: ['./trivia.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaComponent implements OnInit {

    constructor() {
    }

    public ngOnInit(): void {
    }

    /**
     * Scroll to top when route changed
     * https://github.com/angular/angular/issues/7791
     * */
    public onDeactivate() {
        window.scrollTo(0, 0);
    }
}
