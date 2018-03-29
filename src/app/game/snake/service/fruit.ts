/**
 * fruit
 */

export interface FruitType {
    name: string;
    value: number;
    x: number; // x position in snake-graphics.png
    y: number; // y position in snake-graphics.png
}

export const FRUIT_TYPES: FruitType[] = [
    {name: 'apple', value: 10, x: 0, y: 3},
    {name: 'grapes', value: 20, x: 0, y: 2},
    {name: 'orange', value: 30, x: 2, y: 3},
    {name: 'watermelon', value: 40, x: 1, y: 3},
    {name: 'pineapple', value: 50, x: 1, y: 2},
];

export class Fruit {

    // x position in the tiles grid
    private _x: number;
    get x(): number {
        return this._x;
    }

    // y position in the tiles grid
    private _y: number;
    get y(): number {
        return this._y;
    }

    public type: FruitType;

    constructor() {
        this._x = 1;
        this._y = 1;
        this.type = null;
    }

    public setPosition( x: number, y: number ) {
        this._x = x;
        this._y = y;
    }
}
