/**
 * profile
 */

export class Profile {
    public points: number;
    public consecutive: number;
    public wrong: number;
    public correct: number;
    public completed: number;

    constructor() {
        this.points = 0;
        this.consecutive = 0;
        this.wrong = 0;
        this.correct = 0;
        this.completed = 0;
    }
}
