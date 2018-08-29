/**
 * game.module
 */

import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { GameCenterComponent } from './center/game-center.component';
import { GameRoutingModule } from './game.routing';

@NgModule({
    imports: [
        LazyLoadImageModule,
        GameRoutingModule
    ],
    exports: [],
    declarations: [GameCenterComponent],
    providers: [],
})
export class GameModule {
}
