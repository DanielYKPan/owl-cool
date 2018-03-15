/**
 * game.service
 */

import { Injectable } from '@angular/core';
import * as from2048 from '../reducers';
import * as TileActions from '../actions/tile';
import { select, Store } from '@ngrx/store';
import { Tile } from '../tile.model';

export const SIZE = 4;
export const STARTING_TILES = 2;

const Vectors = {
    37: {x: -1, y: 0}, // left
    38: {x: 0, y: -1}, // up
    39: {x: 1, y: 0}, // right
    40: {x: 0, y: 1} // down
};

@Injectable()
export class GameService {

    private _cells: string[];
    get cells(): string[] {
        return this._cells;
    }

    private _tiles: Tile[];

    constructor( private store: Store<from2048.State> ) {
        this.store.pipe(select(from2048.getTiles)).subscribe(( tiles ) => {
            this._tiles = tiles;
        });
    }

    public newGame(): void {
        this.resetGameStatus();
        this.buildGameGrid();
        this.buildStartingPosition();
    }

    public move( direction: number ): void {
        let hasMoved = false;
        let scores = 0;
        let gameWon = false;
        let gameOver = false;

        this.dumpOldTiles();

        const positions = this.getTraversalDirections(direction);

        positions.x.forEach(( x ) => {
            positions.y.forEach(( y ) => {
                const originalCoordinate = {x, y};
                const originalPosition = x + y * SIZE;
                const tile = this.getTileAt(originalCoordinate);

                if (tile) {
                    const cell = this.calculateNextPosition(originalCoordinate, direction);
                    const next = cell.next;

                    if (next && next.value === tile.value && !next.merged) {
                        next.value = tile.value * 2; // double the next tile's value

                        tile.shouldDump = true; // set the tile shouldDump status to true
                                                // so that we could clean this tile before next move

                        next.merged = true; // set the next tile's merged status to true
                                            // so that we know it could not merge any more
                                            // in the next check

                        this.moveTile(next.position, tile, next);

                        scores += next.value; // Add the new value to scoring table

                        hasMoved = true;
                    } else {
                        // It a tile's next tile not exists,
                        // that means the new coordination is empty
                        // and we could move the tile to the new place
                        this.moveTile(cell.newPosition, tile);
                        this._cells[cell.newPosition] = tile.id;
                    }

                    if (!hasMoved && originalPosition !== cell.newPosition) {
                        hasMoved = true;
                    }
                }
            });
        });

        if (hasMoved) {
            this.insertTileRandomly();
        }
    }

    private resetGameStatus() {
        // to be configured
    }

    private buildGameGrid(): void {
        this._cells = new Array(SIZE * SIZE).fill(null);
    }

    private buildStartingPosition(): void {
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
            return cell === null ? index : null;
        }).filter(( value: number ) => value !== null);
    }

    private getTraversalDirections( direction: number ): { x: number[], y: number[] } {
        const vector = Vectors[direction];
        const positions: { x: number[], y: number[] } = {x: [], y: []};
        for (let i = 0; i < SIZE; i++) {
            positions.x.push(i);
            positions.y.push(i);
        }

        if (vector.y > 0) {
            positions.y = positions.y.reverse();
        }

        if (vector.x > 0) {
            positions.x = positions.x.reverse();
        }

        return positions;
    }

    private getTileAt( coordination: { x: number, y: number } ): Tile {

        // We need to check if the coordination is inside the grid
        if (this.withinGrid(coordination)) {
            // transform coordination to its corresponding index in grid array so that
            // we can get the specific value (tile's Id) in grid array
            const position = coordination.x + coordination.y * SIZE;
            const id = this._cells[position];

            // Once we get the tile's id from grid,
            // we can get the specific tile from tiles array
            return this._tiles.find(( t ) => t.id === id);
        } else {
            return null;
        }
    }

    /* Calculate a next possible coordination a tile could move to */
    private calculateNextPosition( coordination: { x: number, y: number }, direction: number ): any {
        // the move vector based on the move direction
        const vector = Vectors[direction];
        let current: { x: number, y: number };
        do {
            // Save the current coordination
            current = coordination;

            // Get the next coordination
            coordination = {
                x: current.x + vector.x,
                y: current.y + vector.y
            };

            // If the checkCellAvailability return true, that means the new coordination has no tile
            // and we continue to check the next one in the same direction.
            // If the checkCellAvailability return false,
            // that means the coordination we check either has a tile or is out of the grid
        } while (this.checkCellAvailability(coordination));

        const newPosition = current.x + current.y * SIZE;

        return {
            newPosition, // we save the last available coordination
            next: this.getTileAt(coordination) // we get the tile on non-available coordination
        };
    }

    private checkCellAvailability( coordination: { x: number, y: number } ): boolean {
        // if the coordination is not inside the grid, we return false.
        // if it is inside the grid, we check if the coordination inside the grid has Id value.
        if (this.withinGrid(coordination)) {
            const index = coordination.x + coordination.y * SIZE;
            return !this._cells[index];
        } else {
            return false;
        }
    }

    private moveTile( newPosition: number, oldTile: Tile, nextTile: Tile = null ): void {
        const oldPosition = oldTile.position;
        if (newPosition === oldPosition) {
            return;
        }

        this._cells[oldPosition] = null;

        this.store.dispatch(new TileActions.UpdateTile({newPosition, oldTile, nextTile}));
    }

    private dumpOldTiles(): void {
        this.store.dispatch(new TileActions.DumpTiles());
    }

    private withinGrid( coordination: { x: number, y: number } ): boolean {
        return coordination.x >= 0 && coordination.x < SIZE &&
            coordination.y >= 0 && coordination.y < SIZE;
    }
}
