import {
    AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy,
    OnInit
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { Subscription } from 'rxjs/Subscription';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { startWith } from 'rxjs/operators/startWith';
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

    private _isSidePanelExpanded = false;
    get isSidePanelExpanded(): boolean {
        return this._isSidePanelExpanded;
    }

    private _pageName: string;

    @HostBinding('class')
    get pageNameClass(): string {
        return this._pageName;
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
                this._pageName = data.name;
                this._isSidePanelExpanded =
                    this.appService.isDesktopSize && data.showSidePanel;
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
