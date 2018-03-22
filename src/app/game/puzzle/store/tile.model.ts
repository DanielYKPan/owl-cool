/**
 * tile.model
 */
import { uuid } from '../../share/utils';

export class Tile {
    /* Property id */
    private _id: string;
    get id(): string {
        return this._id;
    }

    /* Property value */
    private _value: number;
    get value(): number {
        return this._value;
    }

    /* Property isBlank */
    private _isBlank: boolean;
    get isBlank(): boolean {
        return this._isBlank;
    }

    private _position: number;
    get position(): number {
        return this._position;
    }

    set position( val: number ) {
        this._position = val;
    }

    constructor( value?: number, isBlank?: boolean ) {
        this._id = uuid();
        this._value = value === null ? null : value;
        this._position = this._value;
        this._isBlank = isBlank === true;
    }
}
