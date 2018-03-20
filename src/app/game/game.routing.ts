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
                children: [
                    {
                        path: '',
                        component: GameCenterComponent,
                        data: {
                            name: 'page-game-center',
                            showSidePanel: false,
                        }
                    },
                    {
                        path: '2048',
                        loadChildren: 'app/game/2048/game.module#GameModule'
                    },
                    {
                        path: 'minesweeper',
                        loadChildren: 'app/game/minesweeper/minesweeper.module#MinesweeperModule'
                    },
                ]
            }
        ])
    ],
    exports: [RouterModule],
    providers: []
})
export class GameRoutingModule {
}
