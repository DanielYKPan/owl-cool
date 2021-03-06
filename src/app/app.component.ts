import {
    AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy,
    OnInit
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter ,  map ,  mergeMap ,  startWith } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    animations: [
        trigger('showSidePanelAnimation', [
            transition('0 => 1', [
                style({'transform': 'translate3d(-100%, 0, 0)'}),
                animate('400ms cubic-bezier(.25,.8,.25,1)', style({'transform': 'translate3d(0, 0, 0)'}))
            ]),
            transition('1 => 0', [
                style({'transform': 'translate3d(0, 0, 0)', 'visibility': 'visible'}),
                animate('400ms cubic-bezier(.25,.8,.25,1)', style({'transform': 'translate3d(-100%, 0, 0)'}))
            ])
        ])
    ],
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {

    private routerSub: Subscription;
    private viewResizeSub = Subscription.EMPTY;

    private routeData: any = {};

    private _isSidePanelExpanded = false;
    get isSidePanelExpanded(): boolean {
        return this._isSidePanelExpanded;
    }

    // whether to show the hamburger button in top bar
    private _hideTopBarHamburger = false;
    get hideTopBarHamburger(): boolean {
        return this._hideTopBarHamburger;
    }

    // whether to show the top bar
    private _hideTopBar = false;
    get hideTopBar(): boolean {
        return this._hideTopBar;
    }

    @HostBinding('class')
    get pageNameClass(): string {
        return this.routeData.name;
    }

    constructor( private viewportRuler: ViewportRuler,
                 private appService: AppService,
                 private router: Router,
                 private route: ActivatedRoute,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit(): void {
    }

    public ngAfterContentInit(): void {

        this.appService.checkIsDesktopSize();

        this.viewResizeSub = this.viewportRuler.change(150)
            .pipe(
                startWith(null)
            )
            .subscribe(() => {
                this.appService.checkIsDesktopSize();
                this._hideTopBarHamburger =
                    this.appService.isDesktopSize && !this.routeData.showSidePanel;
                this.cdRef.markForCheck();
            });

        this.routerSub = this.router.events
            .pipe(
                filter(e => e instanceof NavigationEnd),
                map(() => {
                    let route = this.route;
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
                filter(( route ) => route.outlet === 'primary'),
                mergeMap(( route ) => route.data)
            )
            .subscribe(( data: any ) => {
                this.routeData = data;

                this._isSidePanelExpanded =
                    this.appService.isDesktopSize && data.showSidePanel;

                this._hideTopBarHamburger =
                    this.appService.isDesktopSize && !data.showSidePanel;

                this._hideTopBar = data.hideTopBar;

                this.cdRef.markForCheck();
            });
    }

    public ngOnDestroy(): void {
        this.routerSub.unsubscribe();
        this.viewResizeSub.unsubscribe();
    }

    public changeSidePanelState() {
        this._isSidePanelExpanded = !this._isSidePanelExpanded;
    }
}
