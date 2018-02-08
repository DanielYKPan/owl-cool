/**
 * owl.component
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-owl',
    templateUrl: './owl.component.html',
    styleUrls: ['./owl.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    animations: [
        trigger('routerAnimations', [
            transition('* => *', [
                query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0}), {optional: true}),
                query(':leave', style({zIndex: 2, opacity: 1}), {optional: true}),
                query(':enter', style({opacity: 0}), {optional: true}),

                query(':leave', group([
                    animate('500ms cubic-bezier(.35,0,.25,1)', style({opacity: 0})),
                    animateChild()
                ]), {optional: true}),
                query(':enter', group([
                    animate('500ms cubic-bezier(.35,0,.25,1)', style({opacity: 1})),
                    animateChild()
                ]), {optional: true})
            ])
        ])
    ],
})

export class OwlComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {
    }

    /**
     * Scroll to top when route changed
     * https://github.com/angular/angular/issues/7791
     * */
    public onDeactivate() {
        window.scrollTo(0, 0);
    }

    public prepareRouteTransition( outlet ) {
        const animation = outlet.activatedRouteData['animation'];
        return animation || null;
    }
}
