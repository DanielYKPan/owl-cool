/**
 * game-social-icon.component
 */

import { ChangeDetectionStrategy, Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-social-icon',
    templateUrl: './social-icon.component.html',
    styleUrls: ['./social-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    animations: [
        trigger('vibrating', [
            transition('void => inactive, inactive => active', [
                animate('1000ms', keyframes([
                    style({transform: 'rotate(0)', offset: 0}),
                    style({transform: 'rotate(15deg)', offset: 0.2}),
                    style({transform: 'rotate(-10deg)', offset: 0.4}),
                    style({transform: 'rotate(5deg)', offset: 0.5}),
                    style({transform: 'rotate(-5deg)', offset: 0.8}),
                    style({transform: 'rotate(0deg)', offset: 1.0}),
                ]))
            ])
        ])
    ]
})

export class SocialIconComponent implements OnInit {

    private state = 'inactive';

    @HostBinding('@vibrating')
    get socialIconAnimation(): string {
        return this.state;
    }

    constructor() {
    }

    public ngOnInit() {
    }

    @HostListener('mouseenter')
    public handleMouseEnterOnHost() {
        this.state = 'active';
    }

    @HostListener('mouseleave')
    public handleMouseLeaveOnHost() {
        this.state = 'inactive';
    }
}
