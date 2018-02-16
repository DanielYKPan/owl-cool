/**
 * dialog.component
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';
import { OwlDialogService } from '../../../../npmdist/owl-ng';
import { OwlNGDummyDialogComponent } from './dummy-dialog.component';

@Component({
    selector: 'app-owl-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGDialogComponent implements OnInit {

    public team: string;

    constructor( private introductionService: OwlIntroductionService,
                 private cdRef: ChangeDetectorRef,
                 private dialogService: OwlDialogService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Dialog',
            desc: `An Angular component that is used to display content in a overlay panel.`
        });
    }

    public openDialog_1(): void {
        const dialogRef = this.dialogService.open(OwlNGDummyDialogComponent, {
            width: '300px',
            dialogClass: 'dummy-dialog',
            data: {team: ''},
        });

        dialogRef.afterClosed().subscribe(( data: any ) => {
            if (data && data.type === 'confirm') {
                this.team = data.team;
                this.cdRef.markForCheck();
            }
        });
    }

    public openDialog_2( event: any ): void {
        const dialogRef = this.dialogService.open(OwlNGDummyDialogComponent, {
            width: '300px',
            dialogClass: 'dummy-dialog',
            data: {team: 'Golden State Warriors'},
            transitionX: event.clientX,
            transitionY: event.clientY,
        });

        dialogRef.afterClosed().subscribe(( data: any ) => {
            if (data && data.type === 'confirm') {
                this.team = data.team;
                this.cdRef.markForCheck();
            }
        });
    }
}
