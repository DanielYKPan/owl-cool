/**
 * achievement
 */

export interface Achievement {
    id: number;
    key: string;
    img: string;
    name: string;
    description: string;
    points: number;
}

export const ACHIEVEMENTS: Achievement[] = [
    {
        id: 1,
        key: 'firstGame',
        img: 'game1.png',
        name: 'Finish your 1st game',
        description: 'Good job! You just finished your first game.',
        points: 10
    },
    {
        id: 2,
        key: 'fiftyGames',
        img: 'game50.png',
        name: 'Finish 50 games',
        description: 'You\'re getting the hang of this.',
        points: 50
    },
    {
        id: 3,
        key: 'hundredGames',
        img: 'game100.png',
        name: 'Finish 100 games',
        description: 'Holy guacomole, you played a hundred games already?!',
        points: 100
    },
    {
        id: 4,
        key: 'tenConsecutivelyCorrectAnswers',
        img: 'combo10.png',
        name: 'C-C-C-C-Combo Maker! #10',
        description: 'You awesome person you! You answered 10 consecutive questions correctly.',
        points: 50
    },
    {
        id: 5,
        key: 'twentyFiveConsecutivelyCorrectAnswers',
        img: 'combo25.png',
        name: 'C-C-C-C-Combo Maker! #25',
        description: 'Amazeballs! You answered 25 consecutive questions correctly.',
        points: 100
    },
    {
        id: 6,
        key: 'fiftyConsecutivelyCorrectAnswers',
        img: 'combo50.png',
        name: 'C-C-C-C-Combo Maker! #50',
        description: 'Barney: It\'s going to be legend-- wait for it-- ' +
        'and I hope you\'re not lactose intolerant, because the second half ' +
        'of the word is-- Legendary! You answered 50 consecutive questions correctly',
        points: 200
    },
    {
        id: 7,
        key: 'animals100Questions',
        img: 'animals.png',
        name: 'Answer 100 questions about animals correctly',
        description: 'You\'re such an animal lover!',
        points: 50
    },
    {
        id: 8,
        key: 'animalsMaster',
        img: 'animals8.png',
        name: 'Get 8/10 or more in the Animals quiz',
        description: 'Zoologist',
        points: 20
    },
    {
        id: 9,
        key: 'entertainment100Questions',
        img: 'entertainment.png',
        name: 'Answer 100 questions about entertainment correctly',
        description: 'Such an entertainer',
        points: 50
    },
    {
        id: 10,
        key: 'entertainmentMaster',
        img: 'entertainment8.png',
        name: 'Get 8/10 or more in the entertainment quiz',
        description: 'Are you not entertained?',
        points: 20
    },
    {
        id: 11,
        key: 'general100Questions',
        img: 'general.png',
        name: 'Answer 100 general questions correctly',
        description: 'Good job!',
        points: 50
    },
    {
        id: 12,
        key: 'generalMaster',
        img: 'general8.png',
        name: 'Get 8/10 or more in the general quiz',
        description: 'Generalist',
        points: 20
    },
    {
        id: 13,
        key: 'science100Questions',
        img: 'science.png',
        name: 'Answer 100 questions about science correctly',
        description: 'Don\'t let it go boom!',
        points: 50
    },
    {
        id: 14,
        key: 'scienceMaster',
        img: 'science8.png',
        name: 'Get 8/10 or more in the science quiz',
        description: 'As smart as Sheldon Cooper',
        points: 20
    },
    {
        id: 15,
        key: 'sports100Questions',
        img: 'sports.png',
        name: 'Answer 100 questions about sports correctly',
        description: 'You seem to be a sportive person',
        points: 50
    },
    {
        id: 16,
        key: 'sportsMaster',
        img: 'sports8.png',
        name: 'Get 8/10 or more in the sports quiz',
        description: 'What a sportsman!',
        points: 20
    },
    {
        id: 17,
        key: 'videoGames100Questions',
        img: 'videogames.png',
        name: 'Answer 100 questions about games correctly',
        description: 'Go out once in a while!',
        points: 50
    },
    {
        id: 18,
        key: 'videoGamesMaster',
        img: 'videogames8.png',
        name: 'Get 8/10 or more in the videoGames quiz',
        description: 'LU-LU-LU-LUDICROUS KILL!',
        points: 20
    },
    {
        id: 19,
        key: 'geek',
        img: 'geek.png',
        name: 'Get 8/10 in the movies, science and videoGames quizzes',
        description: 'Played like a real geek!',
        points: 50
    },
    {
        id: 20,
        key: 'beater',
        img: 'beater.png',
        name: 'Get 8/10 in all quizzes',
        description: 'Beaten the game',
        points: 100
    },
    {
        id: 21,
        key: 'loser',
        img: 'loser.png',
        name: 'Get at least 20 questions wrong',
        description: 'At least you win in losing!',
        points: 10
    },
    {
        id: 22,
        key: 'zeroScore',
        img: 'zeroScore.png',
        name: 'Get 0/10 in any quiz',
        description: 'Did you even try?',
        points: 10
    },
    {
        id: 23,
        key: 'oneScore',
        img: 'oneScore.png',
        name: 'Get 1/10 in any quiz',
        description: 'Better than nothing!',
        points: 10
    },
    {
        id: 24,
        key: 'newbie',
        img: 'newbie.png',
        name: 'Answer your first answer correctly',
        description: 'Welcome newbie!',
        points: 10
    },
    {
        id: 25,
        key: 'fail',
        img: 'fail.png',
        name: 'Get your first wrong answer',
        description: 'Fail!',
        points: 10
    },
];
