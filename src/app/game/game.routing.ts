/**
 * game.routing
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameCenterComponent } from './center/game-center.component';
import { KaraokeModule } from './karaoke/karaoke.module';

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
                            hideTopBar: true,
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
                    {
                        path: 'karaoke',
                        loadChildren: 'app/game/karaoke/karaoke.module#KaraokeModule'
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
