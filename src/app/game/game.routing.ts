/**
 * game.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameCenterComponent } from './game-center.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GameCenterComponent,
                data: {
                    name: 'page-game-center',
                    showSidePanel: false,
                }
            }
        ])
    ],
    exports: [RouterModule],
})
export class GameRoutingModule {
}
