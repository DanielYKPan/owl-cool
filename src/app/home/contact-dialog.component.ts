/**
 * contact-dialog.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-dialog',
    templateUrl: './contact-dialog.component.html',
    styleUrls: ['./contact-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactDialogComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {
    }
}
