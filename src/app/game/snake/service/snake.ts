/**
 * snake
 */

export enum Direction {
    Left = 37,
    Up = 38,
    Right = 39,
    Down = 40,
}

export class Snake {

    private directions = {
        Left: [-1, 0],
        Up: [0, -1],
        Right: [1, 0],
        Down: [0, 1]
    };

    /* Property _x */
    private _x: number;
    get x(): number {
        return this._x;
    }

    /* Property _y */
    private _y: number;
    get y(): number {
        return this._y;
    }

    /* Property direction */
    public direction: Direction;

    /* Property _speed */
    private _speed: number;
    get speed(): number {
        return this._speed;
    }

    /* Property _segments */
    private _segments: Array<{ x: number, y: number }>;
    get segments(): Array<{ x: number, y: number }> {
        return this._segments;
    }

    private growSegments: number;

    private moveDelay: number;

    constructor() {
        this.moveDelay = 0;
        this.growSegments = 0;
        this._segments = [];
    }

    public init( x: number, y: number,
                 direction: Direction, speed: number,
                 numSegments: number ): void {
        this._x = x;
        this._y = y;
        this.direction = direction;
        this._speed = speed;
        this.moveDelay = 0;
        this.growSegments = 0;

        this._segments = [];
        for (let i = 0; i < numSegments; i++) {
            this._segments.push({
                x: this._x - i * this.directions[Direction[direction]][0],
                y: this._y - i * this.directions[Direction[direction]][1]
            });
        }
    }

    public tryMove( dt: number ): boolean {
        this.moveDelay += dt;
        const maxMoveDelay = 1 / this._speed;
        return this.moveDelay > maxMoveDelay;
    }

    public nextMove(): { x: number, y: number } {
        const nextX = this._x + this.directions[Direction[this.direction]][0];
        const nextY = this._y + this.directions[Direction[this.direction]][1];
        return {x: nextX, y: nextY};
    }

    public move(): void {
        const nextPosition = this.nextMove();
        this._x = nextPosition.x;
        this._y = nextPosition.y;

        // get the last segment of the snake
        const lastSegment = this._segments[this._segments.length - 1];

        // Grow a segment if needed
        if (this.growSegments > 0) {
            this._segments.push({x: lastSegment.x, y: lastSegment.y});
            this.growSegments--;
        }

        // move every segment to the position of its previous position
        for (let i = this._segments.length - 1; i >= 1; i--) {
            this._segments[i].x = this._segments[i - 1].x;
            this._segments[i].y = this._segments[i - 1].y;
        }

        // set the first segment
        this._segments[0].x = this._x;
        this._segments[0].y = this._y;

        // reset moveDelay
        this.moveDelay = 0;
    }

    public grow(): void {
        this.growSegments++;
    }
}
