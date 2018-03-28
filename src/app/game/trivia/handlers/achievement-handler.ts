/**
 * achievement-handler
 */
import { Achievement, ACHIEVEMENTS } from '../store/achievement';

export abstract class AchievementHandler {

    protected static hasAchievement( achievements: Achievement[], key: string ): boolean {
        return achievements.some(( achievement: Achievement ) => achievement.key === key);
    }

    protected static getAchievement( key: string ): Achievement {
        return ACHIEVEMENTS.find(( achievement ) => achievement.key === key);
    }
}
