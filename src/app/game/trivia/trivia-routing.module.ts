import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './trivia.component';
import { CategoryComponent } from './category/category.component';
import { AchievementComponent } from './achievement/achievement.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizExitsGuard } from './guards/quiz-exits.guard';
import { ProfileExitsGuard } from './guards/profile-exits.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: TriviaComponent,
        canActivateChild: [ProfileExitsGuard],
        children: [
            {
                path: '',
                component: HomeComponent,
                data: {
                    name: 'page-game-trivia',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            },
            {
                path: 'categories',
                component: CategoryComponent,
                data: {
                    name: 'page-game-trivia',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            },
            {
                path: 'categories/:id',
                component: QuizComponent,
                canActivate: [QuizExitsGuard],
                data: {
                    name: 'page-game-trivia',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            },
            {
                path: 'achievements',
                component: AchievementComponent,
                data: {
                    name: 'page-game-trivia',
                    showSidePanel: false,
                    hideTopBar: true,
                }
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TriviaRoutingModule {
}
