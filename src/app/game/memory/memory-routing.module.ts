import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoryComponent } from './memory.component';
import { BoardComponent } from './board/board.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: MemoryComponent,
        children: [
            {
                path: '',
                component: BoardComponent,
                data: {
                    name: 'page-game-memory',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            },
            {
                path: 'about',
                component: AboutComponent,
                data: {
                    name: 'page-game-memory',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemoryRoutingModule {
}
