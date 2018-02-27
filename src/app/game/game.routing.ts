/**
 * game.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameCenterComponent } from './game-center.component';
import { AuthGuard, ShitResolver } from './game.guard';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GameCenterComponent,
                canActivate: [AuthGuard],
                resolve: {
                    shit: ShitResolver
                },
                data: {
                    name: 'page-game-center',
                    showSidePanel: false,
                }
            }
        ])
    ],
    exports: [RouterModule],
    providers: [AuthGuard, ShitResolver]
})
export class GameRoutingModule {
}
