/**
 * game.service
 */

import { Injectable } from '@angular/core';
import * as from2048 from '../reducers';
import * as TileActions from '../actions/tile';
import { Store } from '@ngrx/store';
import { Tile } from '../tile.model';

export const SIZE = 4;
export const STARTING_TILES = 2;

@Injectable()
export class GameService {

    private _cells: string[];
    get cells(): string[] {
        return this._cells;
    }

    constructor( private store: Store<from2048.State> ) {
    }

    public newGame(): void {
        this.resetGameStatus();
        this.buildGameGrid();
        this.buildStartingPosition();
    }

    private resetGameStatus() {
        // to be configured
    }

    private buildGameGrid(): void {
        this._cells = Array.apply(null, Array(SIZE * SIZE));
    }

    public buildStartingPosition(): void {
        this.store.dispatch(new TileActions.RestTile());

        for (let i = 0; i < STARTING_TILES; i++) {
            this.insertTileRandomly();
        }
    }

    private insertTileRandomly(): void {
        const cells = this.getAllAvailableCells();

        if (cells && cells.length > 0) {
            const randomCell = cells[Math.floor(Math.random() * cells.length)];
            const newTile = new Tile(randomCell);

            this._cells[randomCell] = newTile.id;

            this.store.dispatch(new TileActions.AddTile(newTile));
        }
    }

    private getAllAvailableCells(): number[] {
        return this._cells.map(( cell: string, index: number ) => {
            if (cell === null || cell === undefined) {
                return index;
            }
        });
    }
}
