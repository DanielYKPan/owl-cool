/**
 * getting-start.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-owl-start',
    templateUrl: './getting-start.component.html',
    styleUrls: ['./getting-start.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class OwlNGStartComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {
    }
}
