/**
 * side-nav-item.component
 */

import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { SideNavItem } from './side-nav-item.interface';

@Component({
    selector: 'app-side-nav-item',
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['./side-nav-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class SideNavItemComponent implements OnInit, OnChanges {

    @Input() item: SideNavItem;
    @Input() currentUrl: string;

    public expandStatus: boolean;
    public selected: boolean;

    constructor(private location: Location) {
    }

    public ngOnChanges( changes: SimpleChanges ): void {
        if (changes['currentUrl'] &&
            !changes['currentUrl'].isFirstChange()) {
            this.selected = this.currentUrl.includes(this.item.slug);
        }
    }

    public ngOnInit() {
        this.expandStatus = this.location.path().includes(this.item.slug);
    }

    public clickHeadingButton( event: any ): void {
        this.expandStatus = !this.expandStatus;
        event.preventDefault();
    }
}
