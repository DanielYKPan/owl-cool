import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnakeComponent } from './snake.component';
import { BoardComponent } from './board/board.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: SnakeComponent,
        children: [
            {
                path: '',
                component: BoardComponent,
                data: {
                    name: 'page-game-snake',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            },
            {
                path: 'about',
                component: AboutComponent,
                data: {
                    name: 'page-game-snake',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SnakeRoutingModule {
}
