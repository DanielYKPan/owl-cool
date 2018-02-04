/**
 * side-panel.component
 */

import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class SidePanelComponent implements OnInit {

    @HostBinding('class.layout-side-panel')
    get layoutSidePanelClass(): boolean {
        return true;
    }

    constructor() {
    }

    public ngOnInit() {
    }
}
