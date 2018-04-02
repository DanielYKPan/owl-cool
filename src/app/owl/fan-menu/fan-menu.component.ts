import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';

@Component({
    selector: 'app-owl-fan-menu',
    templateUrl: './fan-menu.component.html',
    styleUrls: ['./fan-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})
export class OwlNGFanMenuComponent implements OnInit {

    public movable = true;

    public spinable = false;

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Fan Menu',
            desc: `An Angular component that is used to show menu items.`
        });
    }

    public logMessage( event: any ): void {
        console.log(event);
    }
}
