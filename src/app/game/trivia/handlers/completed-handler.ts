/**
 * completed-handler
 */
import { AchievementHandler } from './achievement-handler';
import { Profile } from '../store/profile';
import { Achievement } from '../store/achievement';

export class CompletedHandler extends AchievementHandler {
    static getAchieved( profile: Profile, gainedAchievement ): Achievement[] {
        const achieved = [];

        if (profile.completed >= 1 && !AchievementHandler.hasAchievement(gainedAchievement, 'firstGame')) {
            achieved.push(AchievementHandler.getAchievement('firstGame'));
        }

        if (profile.completed >= 50 && !AchievementHandler.hasAchievement(gainedAchievement, 'fiftyGames')) {
            achieved.push(AchievementHandler.getAchievement('fiftyGames'));
        }

        if (profile.completed >= 100 && !AchievementHandler.hasAchievement(gainedAchievement, 'hundredGames')) {
            achieved.push(AchievementHandler.getAchievement('hundredGames'));
        }

        return achieved;
    }
}
