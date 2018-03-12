/**
 * game.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
import { GameBoardComponent } from './board/board.component';
import { GameAboutComponent } from './about/about.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: GameComponent,
            children: [
                {
                    path: '',
                    component: GameBoardComponent,
                    data: {
                        name: 'page-game-2048',
                        showSidePanel: false,
                        hideTopBar: true,
                    },
                },
                {
                    path: 'about',
                    component: GameAboutComponent,
                    data: {
                        name: 'page-game-2048',
                        showSidePanel: false,
                        hideTopBar: true,
                    },
                },
            ]
        }
    ])],
    exports: [RouterModule]
})
export class GameRoutingModule {
}
