/**
 * combo-handler
 */
import { AchievementHandler } from './achievement-handler';
import { Profile } from '../store/profile';
import { Achievement } from '../store/achievement';

export class ComboHandler extends AchievementHandler {
    static getAchieved( profile: Profile, gainedAchievement ): Achievement[] {
        const achieved = [];

        if (profile.consecutive >= 10 && !AchievementHandler.hasAchievement(gainedAchievement, 'tenConsecutivelyCorrectAnswers')) {
            achieved.push(AchievementHandler.getAchievement('tenConsecutivelyCorrectAnswers'));
        }

        if (profile.consecutive >= 25 && !AchievementHandler.hasAchievement(gainedAchievement, 'twentyFiveConsecutivelyCorrectAnswers')) {
            achieved.push(AchievementHandler.getAchievement('twentyFiveConsecutivelyCorrectAnswers'));
        }

        if (profile.consecutive >= 50 && !AchievementHandler.hasAchievement(gainedAchievement, 'fiftyConsecutivelyCorrectAnswers')) {
            achieved.push(AchievementHandler.getAchievement('fiftyConsecutivelyCorrectAnswers'));
        }

        return achieved;
    }
}
