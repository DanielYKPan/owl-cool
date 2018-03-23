import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-game-memory-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    @Output() public startNewGame = new EventEmitter<any>();

    @HostBinding('class.game-memory-header')
    get gameMemoryHeaderClass(): boolean {
        return true;
    }

    constructor( private router: Router,
                 private route: ActivatedRoute ) {
    }

    public ngOnInit() {
    }

    public newGame(): void {
        if (this.router.url === '/games/memory') {
            this.startNewGame.emit(true);
        } else {
            this.router.navigate(['./'], {relativeTo: this.route});
        }
    }

    public checkAbout() {
        this.router.navigate(['./about'], {relativeTo: this.route});
    }

}
