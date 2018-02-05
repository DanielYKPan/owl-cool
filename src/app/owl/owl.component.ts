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
}
