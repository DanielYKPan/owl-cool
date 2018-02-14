/**
 * check-box.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-check-box',
    templateUrl: './check-box.component.html',
    styleUrls: ['./check-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGCheckBoxComponent implements OnInit {

    public selectedDramas: string[];

    public selectedBrands: string[] = ['Apple', 'Samsung'];

    public selectedGroceries: string[] = [];

    public checked_1 = false;

    public checked_2 = false;

    public disabled_checked_2 = false;

    public checked_3 = false;

    public fruitChecked = false;
    public fruitIndeterminate = false;
    public meatChecked = false;
    public meatIndeterminate = false;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Checkbox',
            desc: `Owl Checkbox is an input component as an extension to standard HTML checkbox element.`
        });
    }

    public toggleFruitCheck( event: any ): void {
        if (event.checked) {
            this.selectedGroceries = this.selectedGroceries.filter(( v ) => {
                return v !== 'Apple' && v !== 'Orange';
            });
            this.selectedGroceries = [...this.selectedGroceries, 'Apple', 'Orange'];
        } else {
            this.selectedGroceries = this.selectedGroceries.filter(( v ) => {
                return v !== 'Apple' && v !== 'Orange';
            });
        }
    }

    public onFruitChange( event: any ): void {
        const hasApple = this.selectedGroceries.includes('Apple');
        const hasOrange = this.selectedGroceries.includes('Orange');

        this.fruitChecked = hasApple && hasOrange;
        this.fruitIndeterminate = (hasApple && !hasOrange) || (!hasApple && hasOrange);
    }

    public toggleMeatCheck( event: any ): void {
        if (event.checked) {
            this.selectedGroceries = this.selectedGroceries.filter(( v ) => {
                return v !== 'Pork' && v !== 'Beef';
            });
            this.selectedGroceries = [...this.selectedGroceries, 'Pork', 'Beef'];
        } else {
            this.selectedGroceries = this.selectedGroceries.filter(( v ) => {
                return v !== 'Pork' && v !== 'Beef';
            });
        }
    }

    public onMeatChange( event: any ): void {
        const hasPork = this.selectedGroceries.includes('Pork');
        const hasBeef = this.selectedGroceries.includes('Beef');

        this.meatChecked = hasPork && hasBeef;
        this.meatIndeterminate = (hasPork && !hasBeef) || (!hasPork && hasBeef);
    }
}
