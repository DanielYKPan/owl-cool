/**
 * game.module
 */

import { NgModule } from '@angular/core';

import { GameCenterComponent } from './game-center.component';
import { GameRoutingModule } from './game.routing';

@NgModule({
    imports: [
        GameRoutingModule
    ],
    exports: [],
    declarations: [GameCenterComponent],
    providers: [],
})
export class GameModule {
}
