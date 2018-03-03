/**
 * side-nav.component
 */

import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators/filter';
import { SideNavItem } from './side-nav-item.interface';
import { AppService } from '../../app.service';

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

    private _showTabletNav: boolean;
    get showTabletNav(): boolean {
        return this._showTabletNav;
    }

    private _homeItems: SideNavItem[];
    get homeItems(): SideNavItem[] {
        return this._homeItems;
    }

    private _owlItems: SideNavItem[];
    get owlItems(): SideNavItem[] {
        return this._owlItems;
    }

    private _viewPortSizeChangeSub = Subscription.EMPTY;

    constructor( private _router: Router,
                 private appService: AppService,
                 private cdRef: ChangeDetectorRef ) {
        this._viewPortSizeChangeSub = this.appService.viewPortSizeChange
            .subscribe(( event: any ) => {
                this.checkShowTabletNavState(event.isDesktopSize);
            });
    }

    public ngOnInit() {
        this._routerSub = this._router.events
            .pipe(
                filter(e => e instanceof NavigationEnd)
            )
            .subscribe(( event: NavigationEnd ) => {
                this._currentUrl = event.url;
                this.cdRef.markForCheck();
            });

        this._owlItems = [
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
                        name: 'Form Controls',
                        level: 2,
                        slug: 'form-controls',
                        children: [
                            {
                                name: 'Checkbox',
                                slug: '/owlng/checkbox',
                                level: 3
                            },
                            {
                                name: 'Color Picker',
                                slug: '/owlng/color-picker',
                                level: 3
                            },
                            {
                                name: 'Form Field',
                                slug: '/owlng/form-field',
                                level: 3
                            },
                            {
                                name: 'Input',
                                slug: '/owlng/input',
                                level: 3
                            },
                            {
                                name: 'Mask',
                                slug: '/owlng/mask',
                                level: 3
                            },
                            {
                                name: 'Radio Button',
                                slug: '/owlng/radio',
                                level: 3,
                            },
                            {
                                name: 'Select',
                                slug: '/owlng/select',
                                level: 3
                            },
                            {
                                name: 'Slider',
                                slug: '/owlng/slider',
                                level: 3
                            },
                            {
                                name: 'Switch',
                                slug: '/owlng/switch',
                                level: 3
                            }
                        ]
                    },
                    {
                        name: 'Layout',
                        level: 2,
                        slug: 'layout',
                        children: [
                            {
                                name: 'Accordion Panel',
                                slug: '/owlng/accordion',
                                level: 3
                            },
                            {
                                name: 'Galleria',
                                slug: '/owlng/galleria',
                                level: 3
                            },
                            {
                                name: 'Menu',
                                slug: '/owlng/menu',
                                level: 3
                            },
                            {
                                name: 'Tab View',
                                slug: '/owlng/tab-view',
                                level: 3
                            },
                        ]
                    },
                    {
                        name: 'Popups and Modals',
                        level: 2,
                        slug: 'popups-modals',
                        children: [
                            {
                                name: 'Dialog',
                                slug: '/owlng/dialog',
                                level: 3
                            },
                            {
                                name: 'Notifier',
                                slug: '/owlng/notifier',
                                level: 2
                            },
                            {
                                name: 'Sweet Alert',
                                slug: '/owlng/sweet-alert',
                                level: 3
                            },
                            {
                                name: 'Tooltip',
                                slug: '/owlng/tooltip',
                                level: 3
                            },
                        ]
                    },
                    {
                        name: 'Buttons and Indicators',
                        slug: 'buttons-indicators',
                        level: 2,
                        children: [
                            {
                                name: 'Back To Top',
                                slug: '/owlng/back-top',
                                level: 3
                            },
                            {
                                name: 'Chips',
                                slug: '/owlng/chips',
                                level: 3
                            },
                            {
                                name: 'Progress Bar',
                                slug: '/owlng/progressbar',
                                level: 3
                            },
                            {
                                name: 'Rating',
                                slug: '/owlng/rating',
                                level: 3
                            },
                            {
                                name: 'Ripple Effect',
                                slug: '/owlng/ripple-effect',
                                level: 3
                            },
                            {
                                name: 'Timer',
                                slug: '/owlng/timer',
                                level: 3
                            }
                        ]
                    }
                ]
            }
        ];

        this._homeItems = [
            {
                name: 'Home',
                level: 1,
                slug: 'home',
            }
        ];
    }

    public ngOnDestroy(): void {
        this._routerSub.unsubscribe();
        this._viewPortSizeChangeSub.unsubscribe();
    }

    private checkShowTabletNavState( isDesktopSize: boolean ): void {
        this._showTabletNav = !isDesktopSize;
        this.cdRef.markForCheck();
    }
}
