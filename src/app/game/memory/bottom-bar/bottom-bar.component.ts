import { Component, OnInit, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-game-bottom-bar',
    templateUrl: './bottom-bar.component.html',
    styleUrls: ['./bottom-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    animations: [
        trigger('slideIn', [
            transition(':enter', [
                style({opacity: 0, transform: 'translateY(100%)'}),
                animate('300ms ease-out')
            ])
        ])
    ]
})
export class BottomBarComponent implements OnInit {

    @Input() moves: number;

    @HostBinding('class.game-memory-bottom-bar')
    get gameMemoryBottomBarClass(): boolean {
        return true;
    }

    @HostBinding('@slideIn')
    get bottomBarAnimation(): boolean {
        return true;
    }

    constructor() {
    }

    public ngOnInit() {
    }

}
