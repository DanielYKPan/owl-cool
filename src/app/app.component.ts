import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

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
export class AppComponent {

    private isSidePanelExpanded = false;

    @HostBinding('class.side-panel-expanded')
    get sidePanelExpanded(): boolean {
        return this.isSidePanelExpanded;
    }

    public changeSidePanelState() {
        this.isSidePanelExpanded = !this.isSidePanelExpanded;
    }
}
