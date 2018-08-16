/**
 * home.component
 */

import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlDialogService } from 'owl-ng';
import { ContactDialogComponent } from './contact-dialog.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class HomeComponent implements OnInit {

    @ViewChild('project') projectElm: ElementRef;

    constructor( private dialogService: OwlDialogService ) {
    }

    public ngOnInit() {
    }

    public handleClickOnScrollDown( event: any ): void {
        this.projectElm.nativeElement.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
        event.preventDefault();
    }

    public handleClickOnContactIcon( event: any ): void {
        this.dialogService.open(ContactDialogComponent);
        event.preventDefault();
    }
}
