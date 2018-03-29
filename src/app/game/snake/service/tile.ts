/**
 * tile
 */

export enum TileContent {
    Empty,
    Wall,
}

export class Tile {
    private _id: number;
    get id(): number {
        return this._id;
    }

    public content: TileContent;

    constructor( id: number, content: TileContent ) {
        this._id = id;
        this.content = content;
    }
}
