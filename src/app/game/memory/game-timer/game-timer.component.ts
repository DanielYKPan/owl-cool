import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-game-memory-timer',
    templateUrl: './game-timer.component.html',
    styleUrls: ['./game-timer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('timeState', [
            transition('* => *', [
                style({
                    opacity: 1,
                    visibility: 'visible',
                    transform: 'scale(1)'
                }),
                animate('700ms ease-in', style({
                    opacity: 0,
                    visibility: 'visible',
                    transform: 'scale(2)'
                }))
            ]),
        ])
    ]
})
export class GameTimerComponent implements OnInit {

    @Input() time: number;

    @HostBinding('class.game-memory-timer')
    get gameMemoryTimerClass(): boolean {
        return true;
    }

    @HostBinding('@timeState')
    get timeString(): string {
        return this.time === 0 ?
            'GO!!!' : this.time.toString();
    }

    constructor() {
    }

    ngOnInit() {
    }
}
