/**
 * dummy-dialog.component
 */

import {
    ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { OwlDialogRef, OWL_DIALOG_DATA } from 'owl-ng';

@Component({
    selector: 'app-owl-dummy-dialog',
    styleUrls: ['./dummy-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
    template: `
        <h1>Dummy Dialog</h1>
        <owl-form-field>
            <input owlInput placeholder="Favourite NBA Team" [(ngModel)]="value" #inputElm>
        </owl-form-field>
        <div class="yk-g">
            <button class="owlng-btn dummy-btn" (click)="onOkClick()">OK</button>
            <button class="owlng-btn dummy-btn" (click)="onCancelClick()">Cancel</button>
        </div>
    `,
})

export class OwlNGDummyDialogComponent implements OnInit {

    @ViewChild('inputElm') inputElm: ElementRef;

    public value: string;

    constructor( public dialogRef: OwlDialogRef<OwlNGDummyDialogComponent>,
                 @Inject(OWL_DIALOG_DATA) public data: any ) {
    }

    public ngOnInit() {
        this.value = this.data.team;

        this.dialogRef.afterOpen().subscribe(() => {
            this.inputElm.nativeElement.focus();
        });
    }

    public onOkClick() {
        this.dialogRef.close({
            type: 'confirm',
            team: this.value
        });
    }

    public onCancelClick() {
        this.dialogRef.close({
            type: 'cancel'
        });
    }
}
