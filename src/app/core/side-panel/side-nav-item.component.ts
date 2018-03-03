/**
 * side-nav-item.component
 */

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
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

    @Output() expandParent = new EventEmitter<any>();

    public expandStatus: boolean;
    public selected: boolean;

    constructor( private cdRef: ChangeDetectorRef ) {
    }

    public ngOnChanges( changes: SimpleChanges ): void {
        if (changes['currentUrl'] && this.currentUrl) {
            this.selected = this.currentUrl.includes(this.item.slug);
            if (this.currentUrl.includes(this.item.slug)) {
                this.expandParent.next(null);
            }
            this.cdRef.markForCheck();
        }
    }

    public ngOnInit() {
    }

    public clickHeadingButton( event: any ): void {
        this.expandStatus = !this.expandStatus;
        event.preventDefault();
    }

    public setExpandStatus(): void {
        this.expandStatus = true;
        this.expandParent.next(null);
        this.cdRef.markForCheck();
    }
}
