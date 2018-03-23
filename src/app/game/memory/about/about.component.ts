import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
    selector: 'app-game-memory-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

    @HostBinding('class.game-memory-about')
    get gameMemoryAboutClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
