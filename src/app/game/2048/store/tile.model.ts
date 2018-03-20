/**
 * tile.model
 */
import { uuid } from '../../share/utils';

export class Tile {
    public id: string;
    public value: number;
    public position: number;
    public merged: boolean;
    public shouldDump: boolean;

    constructor( position: number = null, value: number = 2 ) {

        this.id = uuid();
        this.value = value;
        this.position = position;
        this.merged = false;
        this.shouldDump = false;
    }
}
