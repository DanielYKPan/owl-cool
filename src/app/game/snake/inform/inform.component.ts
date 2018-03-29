import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FruitType } from '../service/fruit';

@Component({
    selector: 'app-game-snake-inform',
    templateUrl: './inform.component.html',
    styleUrls: ['./inform.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformComponent implements OnInit {

    @Input() fruitTypes: FruitType[];

    @Input() scores = 0;

    @Input() best = 0;

    constructor() {
    }

    public ngOnInit() {
    }
}
