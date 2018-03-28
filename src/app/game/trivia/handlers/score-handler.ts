/**
 * score-handler
 */
import { AchievementHandler } from './achievement-handler';
import { Profile } from '../store/profile';
import { Achievement } from '../store/achievement';

export class ScoreHandler extends AchievementHandler {
    static getAchieved( profile: Profile, gainedAchievements: Achievement[] ): Achievement[] {
        const achieved = [];

        if (profile.wrong >= 20 && !AchievementHandler.hasAchievement(gainedAchievements, 'loser')) {
            achieved.push(AchievementHandler.getAchievement('loser'));
        }

        if (profile.correct > 0 && !AchievementHandler.hasAchievement(gainedAchievements, 'newbie')) {
            achieved.push(AchievementHandler.getAchievement('newbie'));
        }

        if (profile.wrong > 0 && !AchievementHandler.hasAchievement(gainedAchievements, 'fail')) {
            achieved.push(AchievementHandler.getAchievement('fail'));
        }

        return achieved;
    }
}
