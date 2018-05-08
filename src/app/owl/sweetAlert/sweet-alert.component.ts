/**
 * sweet-alert.component
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';
import { OwlSweetAlertService } from 'owl-ng';

@Component({
    selector: 'app-owl-sweet-alert',
    templateUrl: './sweet-alert.component.html',
    styleUrls: ['./sweet-alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGSweetAlertComponent implements OnInit {


    public dialogTitle = 'Sweet Alert';

    public dialogContent = 'This angular package is awesome!';

    public dialogType: any = null;

    public dialogTimer: number = null;

    public dialogConfirmBtnContent = 'OK';

    public dialogCancelBtnContent = 'Cancel';

    public dialogInputType: any = null;

    public dialogInputValue: any = null;

    public dialogInputPlaceholder: string = null;

    public dialogInputLabel: string = null;

    public dialogInputOptions: any = null;

    public dialogInputCompareFn: any = null;

    public dialogReturnResult: any = {};

    constructor( private introductionService: OwlIntroductionService,
                 private swal: OwlSweetAlertService,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Sweet Alert',
            desc: 'An Angular component that is used to display content in a overlay panel.'
        });
    }

    public alert(): void {
        const dialogRef = this.swal.swal({
            dialogTitle: this.dialogTitle,
            dialogContent: this.dialogContent,
            type: this.dialogType,
            timer: this.dialogTimer,
            cancelButtonContent: this.dialogCancelBtnContent,
            confirmButtonContent: this.dialogConfirmBtnContent,
            input: this.dialogInputType,
            inputValue: this.dialogInputValue,
            inputPlaceholder: this.dialogInputPlaceholder,
            inputLabel: this.dialogInputLabel,
            inputOptions: this.dialogInputOptions,
            inputCompareFn: this.dialogInputCompareFn,
        });

        dialogRef.afterClosed().subscribe(( result: any ) => {
            this.dialogReturnResult = result;
            this.cdRef.markForCheck();
        });
    }

    public inputTypeChange( type: string ): void {
        switch (type) {
            case 'text':
            case 'textarea':
                this.dialogInputType = type;
                break;

            case 'select':
                this.dialogInputType = type;
                this.dialogInputPlaceholder = 'Select your favourite team';
                this.dialogInputValue = {id: 2, name: 'Los Angeles Lakers'};
                this.dialogInputOptions = {
                    'Golden State Warrior': {id: 1, name: 'Golden State Warrior'},
                    'Los Angeles Lakers': {id: 2, name: 'Los Angeles Lakers'},
                    'Cleveland Cavaliers': {id: 3, name: 'Cleveland Cavaliers'}
                };
                this.dialogInputCompareFn = ( ob1: any, ob2: any ): boolean => ob1.id === ob2.id;

                break;

            case 'radio':
                this.dialogInputType = type;
                this.dialogInputValue = 'Blue';
                this.dialogInputOptions = {
                    Red: 'Red',
                    Blue: 'Blue',
                    Green: 'Green'
                };

                break;

            case 'checkBox':
                this.dialogInputType = type;
                this.dialogInputValue = true;
                this.dialogInputLabel = 'I agree with the terms and conditions';

                break;

            default:
                this.dialogInputType = null;
                this.dialogInputValue = null;
        }
    }
}
