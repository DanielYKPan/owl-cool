/**
 * slider.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGSliderComponent implements OnInit {

    public basicMax = 100;
    public basicMin = 0;
    public basicStep = 1;
    public basicDisabled = false;
    public basicShowBalloonLabel = true;
    public basicShowTicks = false;
    public basicVertical = false;
    public basicSliderValue = 10;
    private _basicTickInterval = 10;
    get basicTickInterval(): number {
        return this.basicShowTicks ? this._basicTickInterval : 0;
    }

    set basicTickInterval( v: number ) {
        this._basicTickInterval = Number(v);
    }

    public rangeMax = 100;
    public rangeMin = 0;
    public rangeStep = 1;
    public rangeDisabled = false;
    public rangeShowBalloonLabel = true;
    public rangeShowTicks = false;
    public rangeVertical = false;
    public rangeSliderValue = [30, 70];
    private _rangeTickInterval = 10;
    get rangeTickInterval(): number {
        return this.rangeShowTicks ? this._rangeTickInterval : 0;
    }

    set rangeTickInterval( v: number ) {
        this._rangeTickInterval = Number(v);
    }

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Slider',
            desc: `Owl Slider is used to select values via an input using dragging of a handle.`
        });
    }
}
