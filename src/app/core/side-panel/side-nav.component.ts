/**
 * side-nav.component
 */

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators/filter';
import { SideNavItem } from './side-nav-item.interface';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class SideNavComponent implements OnInit, OnDestroy {

    private _routerSub: Subscription;

    private _currentUrl: string;
    get currentUrl(): string {
        return this._currentUrl;
    }

    private _sideNavItems: SideNavItem[];
    get sideNavItems(): SideNavItem[] {
        return this._sideNavItems;
    }

    constructor( private _router: Router ) {
    }

    public ngOnInit() {
        this._routerSub = this._router.events
            .pipe(
                filter(e => e instanceof NavigationEnd)
            )
            .subscribe(( event: NavigationEnd ) => {
                this._currentUrl = event.url;
            });

        this._sideNavItems = [
            {
                name: 'getting started',
                level: 1,
                slug: 'home',
            },
            {
                name: 'owl ng',
                level: 1,
                slug: 'owlng',
                children: [
                    {
                        name: 'Getting Start',
                        slug: '/owlng/getting-start',
                        level: 2
                    },
                    {
                        name: 'Ripple Effect',
                        slug: '/owlng/ripple-effect',
                        level: 2
                    },
                ]
            },
            {
                name: 'game',
                level: 1,
                slug: 'game',
                children: [
                    {
                        name: '1. game day',
                        slug: '/game/game-center',
                        level: 2
                    },
                    {
                        name: '2. game day',
                        slug: '/game/game-center2',
                        level: 2
                    },
                    {
                        name: '3. game day',
                        slug: '/game/game-center3',
                        level: 2
                    },
                    {
                        name: '4. game day',
                        slug: '/game/game-center4',
                        level: 2
                    },
                    {
                        name: '5. game day',
                        slug: '/game/game-center5',
                        level: 2
                    }
                ]
            }
        ];
    }

    public ngOnDestroy(): void {
        this._routerSub.unsubscribe();
    }
}
