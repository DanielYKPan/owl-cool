/**
 * select.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-owl-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGSelectComponent implements OnInit {

    public teams = [
        'Warriors',
        'Lakers',
        '76ers',
        'Celtics',
        'Raptors',
        'Rockets',
        'Thunders',
        'Heats',
        'Pacers',
        'Pistons',
        'Spurs',
        'Timberwolves',
        'Blazers',
        'Clippers',
        'Suns',
        'Hornets',
        'Pelicans',
        'Bucks',
        'Bulls',
        'Wizards',
        'Nuggets',
        'Knicks',
        'Nets',
        'Cavaliers',
        'Hawks',
        'Magic',
        'Jazz',
    ];

    public favoriteTeam = 'Lakers';

    public favoriteTeams = new FormControl(['Warriors', 'Lakers', 'Celtics', ]);

    public limitTeams: string[];

    public panelColor = new FormControl('red');

    public selectedCar = {'id': 'gwregre345', 'brand': 'Audi', 'year': 2011, 'color': 'Black'};

    public cars: any[] = [
        {'id': 'dsad231ff', 'brand': 'VW', 'year': 2012, 'color': 'Orange'},
        {'id': 'gwregre345', 'brand': 'Audi', 'year': 2011, 'color': 'Black'},
        {'id': 'h354htr', 'brand': 'Renault', 'year': 2005, 'color': 'Gray'},
        {'id': 'j6w54qgh', 'brand': 'BMW', 'year': 2003, 'color': 'Blue'},
    ];

    public carCompareFn = ( car1: any, car2: any ): boolean => {
        return car1.id === car2.id;
    }

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Select Panel',
            desc: 'Owl Select is used to select an item or multiple items from a collection of options.'
        });
    }
}
