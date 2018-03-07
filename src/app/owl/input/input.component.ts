/**
 * input.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from 'owl-ng';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-owl-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGInputComponent implements OnInit {

    public movieInput = 'Star Wars: The Last Jedi';
    public telephoneInput: string;

    public emailFormControl1 = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    public emailFormControl2 = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    public matcher = new MyErrorStateMatcher();

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Input',
            desc: `Owl Input is an Angular directive as an extension to standard HTML <input> and <textarea> elements.`
        });
    }
}
