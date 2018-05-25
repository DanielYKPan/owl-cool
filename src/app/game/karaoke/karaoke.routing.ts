/**
 * karaoke.routing
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KaraokeComponent } from './karaoke.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: KaraokeComponent,
            data: {
                name: 'page-game-karaoke',
                showSidePanel: false,
                hideTopBar: true,
            },
        }
    ])],
    exports: [RouterModule]
})
export class KaraokeRoutingModule {
}

