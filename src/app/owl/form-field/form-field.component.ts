/**
 * form-field.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-owl-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGFormFieldComponent implements OnInit {

    public drinks = [
        {name: 'Coke'},
        {name: 'Sprite'},
        {name: 'Soda'},
    ];

    public emailFormControl1 = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Form Field',
            desc: 'Owl Form Field is an Angular component to wrap other Owl components and apply styles and animations.'
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
}
