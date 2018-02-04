/**
 * top-bar.component
 */

import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class TopBarComponent implements OnInit {


    @Input() hideHamburger: boolean;
    @Output() hamburgerClick = new EventEmitter<boolean>();

    @HostBinding('class.layout-top-bar')
    get layoutTopBarClass(): boolean {
        return true;
    }

    constructor() {
    }

    public ngOnInit() {
    }

    public clickHamburger( event: any ): void {
        this.hamburgerClick.emit(true);
        event.preventDefault();
    }
}
