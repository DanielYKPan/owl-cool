import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { TriviaRoutingModule } from './trivia-routing.module';
import { TriviaComponent } from './trivia.component';
import { CategoryComponent } from './category/category.component';
import { QuizComponent } from './quiz/quiz.component';
import { TriviaService } from './service/trivia.service';
import { AchievementEventService } from './service/achievement-event.service';
import { reducers } from './store';
import { QuizExitsGuard } from './guards/quiz-exits.guard';
import { ProfileExitsGuard } from './guards/profile-exits.guard';
import { QuizPanelComponent } from './quiz/quiz-panel/quiz-panel.component';
import { QuizResultComponent } from './quiz/quiz-result/quiz-result.component';
import { QuizPointsComponent } from './quiz/quiz-points/quiz-points.component';
import { QuizBoosterComponent } from './quiz/quiz-booster/quiz-booster.component';
import { AchievementComponent } from './achievement/achievement.component';
import { AchievementListComponent } from './achievement/achievement-list/achievement-list.component';
import { HomeComponent } from './home/home.component';
import { GameShareModule } from '../share/share.module';

import {
    OwlNotifierModule,
    OwlTimerModule,
    OWL_NOTIFIER_CONFIG,
    OwlBackTopBtnModule
} from '../../../../npmdist/owl-ng';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        TriviaRoutingModule,
        GameShareModule,
        StoreModule.forFeature('trivia', reducers),

        OwlBackTopBtnModule,
        OwlNotifierModule,
        OwlTimerModule,
    ],
    declarations: [
        TriviaComponent,
        CategoryComponent,
        QuizComponent,
        QuizPanelComponent,
        QuizResultComponent,
        QuizPointsComponent,
        QuizBoosterComponent,
        AchievementComponent,
        AchievementListComponent,
        HomeComponent,
        FooterComponent
    ],
    providers: [
        TriviaService,
        QuizExitsGuard,
        ProfileExitsGuard,
        AchievementEventService,
        {
            provide: OWL_NOTIFIER_CONFIG, useValue: {
                maxStack: 4,
            }
        }
    ],
})
export class TriviaModule {
}
