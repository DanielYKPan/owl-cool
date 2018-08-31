import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skill-dialog',
    templateUrl: './skill-dialog.component.html',
    styleUrls: ['./skill-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillDialogComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
