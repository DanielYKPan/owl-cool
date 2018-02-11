/**
 * chips.component
 */


import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGChipsComponent implements OnInit {

    public drinks = [
        {name: 'Coke'},
        {name: 'Sprite'},
        {name: 'Soda'},
    ];

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Chips',
            desc: 'Owl Chips is used to display a list of values'
        });
    }

    public addDrinks( event: any ): void {
        let input = event.input;
        let value = event.value;

        if ((value || '').trim()) {
            this.drinks.push({name: value.trim()});
        }

        if (input) {
            input.value = '';
        }
    }

    public removeDrinks( drink: any ): void {
        let index = this.drinks.indexOf(drink);

        if (index >= 0) {
            this.drinks.splice(index, 1);
        }
    }
}
