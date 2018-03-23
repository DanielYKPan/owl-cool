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

    private _content: string;
    get content(): string {
        return this._content;
    }

    /* Property revealed */
    private _revealed: boolean;
    get revealed(): boolean {
        return this._revealed;
    }

    set revealed( value: boolean ) {
        this._revealed = value;
    }

    constructor( content?: string ) {
        this._id = uuid();
        this._content = content || null;
        this._revealed = true;
    }
}

