/**
 * owl.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-owl',
    templateUrl: './owl.component.html',
    styleUrls: ['./owl.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {
    }

    /**
     * Scroll to top when route changed
     * https://github.com/angular/angular/issues/7791
     * */
    public onDeactivate() {
        window.scrollTo(0, 0);
    }
}
