import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakeRoutingModule } from './snake-routing.module';
import { SnakeComponent } from './snake.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BoardComponent } from './board/board.component';
import { GameShareModule } from '../share/share.module';
import { GameService } from './service/game.service';
import { InformComponent } from './inform/inform.component';

@NgModule({
    imports: [
        CommonModule,
        SnakeRoutingModule,
        GameShareModule,
    ],
    declarations: [
        SnakeComponent,
        HeaderComponent,
        AboutComponent,
        BoardComponent,
        InformComponent
    ],
    providers: [GameService]
})
export class SnakeModule {
}
