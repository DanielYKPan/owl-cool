/**
 * game.module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game.routing';

@NgModule({
    imports: [
        CommonModule,
        GameRoutingModule
    ],
    exports: [],
    declarations: [GameComponent],
    providers: [],
})
export class GameModule {
}
