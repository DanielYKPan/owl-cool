/**
 * game.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameCenterComponent } from './game-center.component';
import { MemoryModule } from './memory/memory.module';

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
                    {
                        path: 'puzzle',
                        loadChildren: 'app/game/puzzle/puzzle.module#PuzzleModule'
                    },
                    {
                        path: 'memory',
                        loadChildren: 'app/game/memory/memory.module#MemoryModule'
                    },
                    {
                        path: 'trivia',
                        loadChildren: 'app/game/trivia/trivia.module#TriviaModule'
                    },
                    {
                        path: 'snake',
                        loadChildren: 'app/game/snake/snake.module#SnakeModule'
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
