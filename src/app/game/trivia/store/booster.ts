/**
 * booster
 */

export interface Booster {
    cost: number;
    name: string;
    description: string;
}

export const BOOSTERS: Booster[] = [
    {
        cost: 5,
        name: 'increaseTime',
        description: 'Increase your time with 10 seconds',
    },
    {
        cost: 10,
        name: 'deleteWrongAnswer',
        description: 'Delete half wrong options',
    }
];

