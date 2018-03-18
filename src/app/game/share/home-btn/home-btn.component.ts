import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-game-home-btn',
    templateUrl: './home-btn.component.html',
    styleUrls: ['./home-btn.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameHomeBtnComponent implements OnInit {

    @Input() color = 'red';

    constructor( private router: Router ) {
    }

    ngOnInit() {
    }

    public goToCenter() {
        this.router.navigate(['./games']);
    }
}
