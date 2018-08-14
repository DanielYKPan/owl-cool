import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-date-time-picker',
    templateUrl: './date-time-picker.component.html',
    styleUrls: ['./date-time-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwlNGDateTimePickerComponent implements OnInit {

    public dt1_value: Date;
    public dt2_value: Date;
    public dt3_value: Date;
    public dt4_value: Date;
    public dt5_value: Date[];
    public dt6_value: Date;
    public dt7_value: Date;

    public startAt = new Date(2018, 3, 18, 10, 30);

    // Min moment: April 12 2018, 10:30
    public min = new Date(2018, 3, 12, 10, 30);

    // Max moment: April 25 2018, 20:30
    public max = new Date(2018, 3, 25, 20, 30);

    public myFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
    }

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Date Time Picker',
            desc: 'Simple Angular date time picker consists of calendar and timer.'
        });
    }

}
