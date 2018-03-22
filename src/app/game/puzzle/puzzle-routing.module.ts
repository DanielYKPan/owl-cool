import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleComponent } from './puzzle.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameAboutComponent } from './game-about/game-about.component';

const routes: Routes = [
    {
        path: '',
        component: PuzzleComponent,
        children: [
            {
                path: '',
                component: GameBoardComponent,
                data: {
                    name: 'page-game-puzzle',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            },
            {
                path: 'about',
                component: GameAboutComponent,
                data: {
                    name: 'page-game-puzzle',
                    showSidePanel: false,
                    hideTopBar: true,
                },
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PuzzleRoutingModule {
}
