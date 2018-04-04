/**
 * app.routing
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'owlng',
        loadChildren: 'app/owl/owl.module#OwlNGModule',
        data: {
            name: 'page-owlng',
            showSidePanel: true,
        }
    },
    {
        path: 'games',
        loadChildren: 'app/game/game.module#GameModule',
        data: {
            name: 'page-game',
            showSidePanel: false,
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {
            name: 'page-not-found',
            showSidePanel: false,
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
