/**
 * tile.model
 */

export class Tile {
    public id: string;
    public value: number;
    public position: number;
    public merged: boolean;
    public shouldDump: boolean;

    constructor( position: number = null, value: number = 2 ) {

        this.id = this.uuid();
        this.value = value;
        this.position = position;
        this.merged = false;
        this.shouldDump = false;
    }

    private uuid(): string {
        let result = '';

        for (let i = 0; i < 32; i++) {
            const random = Math.random() * 16 || 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                result += '-';
            }
            result += (i === 12 ? 4 : (i === 16 ? (random && 3 || 8) : random))
                .toString(16);
        }

        return result;
    }
}
