/**
 * game.service
 */

import { Injectable } from '@angular/core';
import { Tile, TileContent } from './tile';
import { Direction, Snake } from './snake';
import { Fruit, FRUIT_TYPES } from './fruit';
import { Subject ,  Observable } from 'rxjs';

const GameStatic: any = {
    columns: 20,
    rows: 15,
    tileSize: 32
};

/* Get a random position */
const randRange = ( low: number, high: number ): number => {
    return Math.floor(low + Math.random() * (high - low + 1));
};

@Injectable()
export class GameService {

    public gameOver = true;

    private tiles: Tile[][] = [];
    private canvas: any;
    private tileImage: any;
    private grassImage: any;
    private wallImage: any;
    private initialized = false;
    private preLoaded = false;
    private snake: Snake;
    private fruit: Fruit;

    // Timing and frames per second
    private lastFrame = 0;
    private fpsTime = 0;
    private frameCount = 0;
    private fps = 0;
    private gameOverTime = 1; // How long we have been game over
    private gameOverDelay = 0.5;

    private best = 0;
    private scores = 0;

    private scoresSubject = new Subject<number>();
    private bestSubject = new Subject<number>();

    get scores$(): Observable<number> {
        return this.scoresSubject.asObservable();
    }

    get best$(): Observable<number> {
        return this.bestSubject.asObservable();
    }

    constructor() {
        this.best = +localStorage.getItem('game-snake-best') || 0;
    }

    public init( board: HTMLElement ): void {
        const images = this.loadImages(['snake-graphics.png', 'grass.png', 'wall.png']);
        this.tileImage = images[0];
        this.grassImage = images[1];
        this.wallImage = images[2];
        this.canvas = board;
        this.snake = new Snake();
        this.fruit = new Fruit();
        this.buildGridWithWalls();

        this.scoresSubject.next(this.scores);
        this.bestSubject.next(this.best);

        this.main(0);
    }

    public tryNewGame(): void {
        if (this.gameOver && this.gameOverTime > this.gameOverDelay) {
            this.newGame();
        }
    }

    public setSnakeDirection( key: Direction ): void {
        if (key === Direction.Right && this.snake.direction !== Direction.Left) {
            this.snake.direction = Direction.Right;
        } else if (key === Direction.Down && this.snake.direction !== Direction.Up) {
            this.snake.direction = Direction.Down;
        } else if (key === Direction.Left && this.snake.direction !== Direction.Right) {
            this.snake.direction = Direction.Left;
        } else if (key === Direction.Up && this.snake.direction !== Direction.Down) {
            this.snake.direction = Direction.Up;
        }
    }

    private newGame(): void {
        this.gameOver = false;
        this.setScores(0);
        this.snake.init(10, 10, Direction.Right, 10, 4);
        this.fruit.type = FRUIT_TYPES[0];
        this.addFruit();
    }

    private buildGridWithWalls(): void {
        for (let i = 0; i < GameStatic.rows; i++) {
            this.tiles[i] = [];
            for (let j = 0; j < GameStatic.columns; j++) {
                const id = i * GameStatic.columns + j;
                if (i === 0 || i === GameStatic.rows - 1 ||
                    j === 0 || j === GameStatic.columns - 1) {
                    this.tiles[i][j] = new Tile(id, TileContent.Wall);
                } else {
                    this.tiles[i][j] = new Tile(id, TileContent.Empty);
                }
            }
        }
    }

    private addFruit(): void {
        let valid = false;
        while (!valid) {

            // Randomly set a fruit type
            this.fruit.type = FRUIT_TYPES[Math.floor(Math.random() * FRUIT_TYPES.length)];

            // Get a random position
            const aX = randRange(0, GameStatic.columns - 1);
            const aY = randRange(0, GameStatic.rows - 1);

            let overlap = false;

            for (const segment of this.snake.segments) {
                // Get the position of the current snake segment
                const sx = segment.x;
                const sy = segment.y;

                // Check overlap
                if (aX === sx && aY === sy) {
                    overlap = true;
                    break;
                }
            }

            // Tile must be empty
            if (!overlap && this.tiles[aY][aX].content === TileContent.Empty) {
                // Add an apple at the tile position
                // this.tiles[aX][aY].Content = TileContent.Apple;
                this.fruit.setPosition(aX, aY);
                valid = true;
            }
        }
    }

    private drawGrid(): void {
        const context = this.canvas.getContext('2d');
        context.fillStyle = '#577ddb';
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < GameStatic.rows; i++) {
            for (let j = 0; j < GameStatic.columns; j++) {
                // Get the current tile and location
                const tile = this.tiles[i][j];
                const tileX = j * GameStatic.tileSize;
                const tileY = i * GameStatic.tileSize;

                // Draw tiles based on their type
                if (tile.content === TileContent.Empty) {
                    // Empty space
                    context.drawImage(
                        this.grassImage, 0, 0, 32, 32, tileX, tileY,
                        GameStatic.tileSize, GameStatic.tileSize);
                } else if (tile.content === TileContent.Wall) {
                    // Wall
                    context.drawImage(
                        this.wallImage, 0, 0, 32, 32, tileX, tileY,
                        GameStatic.tileSize, GameStatic.tileSize);
                }
            }
        }
    }

    private drawSnake(): void {
        const context = this.canvas.getContext('2d');
        for (let i = 0; i < this.snake.segments.length; i++) {
            const segment = this.snake.segments[i];
            const segX = segment.x;
            const segY = segment.y;
            const tileX = segX * GameStatic.tileSize;
            const tileY = segY * GameStatic.tileSize;

            // Sprite column and row that gets calculated
            let tX = 0;
            let tY = 0;

            if (i === 0) {
                // TODO: need to check if 'i+1' segment exists
                // Head; Determine the correct image
                const next = this.snake.segments[i + 1]; // segment next to head
                if (segY < next.y) {
                    // Up
                    tX = 3;
                    tY = 0;
                } else if (segX > next.x) {
                    // right
                    tX = 4;
                    tY = 0;
                } else if (segY > next.y) {
                    // down
                    tX = 4;
                    tY = 1;
                } else if (segX < next.x) {
                    // left
                    tX = 3;
                    tY = 1;
                }
            } else if (i === this.snake.segments.length - 1) {
                // tail
                const next = this.snake.segments[i - 1]; // segment next to tail
                if (segY > next.y) {
                    // Up
                    tX = 3;
                    tY = 2;
                } else if (segX < next.x) {
                    // right
                    tX = 4;
                    tY = 2;
                } else if (segY < next.y) {
                    // down
                    tX = 4;
                    tY = 3;
                } else if (segX > next.x) {
                    // left
                    tX = 3;
                    tY = 3;
                }
            } else {
                // body
                const prev = this.snake.segments[i - 1]; // previous segment
                const next = this.snake.segments[i + 1]; // previous segment

                if (prev.x < segX && next.x > segX || prev.x > segX && next.x < segX) {
                    // horizontal in-line
                    tX = 1;
                    tY = 0;
                } else if (prev.y < segY && next.y > segY || prev.y > segY && next.y < segY) {
                    // vertical in-line
                    tX = 2;
                    tY = 1;
                } else if (prev.x < segX && next.y > segY || prev.y > segY && next.x < segX) {
                    // angle left-down
                    tX = 2;
                    tY = 0;
                } else if (prev.x > segX && next.y > segY || prev.y > segY && next.x > segX) {
                    // angle right-down
                    tX = 0;
                    tY = 0;
                } else if (prev.y < segY && next.x > segX || prev.x > segX && next.y < segY) {
                    // angle right-up
                    tX = 0;
                    tY = 1;
                } else if (prev.y < segY && next.x < segX || prev.x < segX && next.y < segY) {
                    // angle left-up
                    tX = 2;
                    tY = 2;
                }
            }

            context.drawImage(
                this.tileImage,
                tX * 64,
                tY * 64, 64, 64, tileX, tileY,
                GameStatic.tileSize, GameStatic.tileSize);
        }
    }

    private drawFruit(): void {

        if (this.fruit.type) {
            const context = this.canvas.getContext('2d');
            const tileX = this.fruit.x * GameStatic.tileSize;
            const tileY = this.fruit.y * GameStatic.tileSize;

            context.drawImage(
                this.tileImage,
                this.fruit.type.x * 64,
                this.fruit.type.y * 64, 64, 64, tileX, tileY,
                GameStatic.tileSize, GameStatic.tileSize);
        }
    }

    private drawGameOverBoard(): void {
        const context = this.canvas.getContext('2d');
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        context.fillStyle = '#ffffff';
        context.font = '24px Verdana';
        this.drawCenterText('Press space bar to start!', 0,
            this.canvas.height / 2, this.canvas.width);
    }

    private drawCenterText( text: string, x: number, y: number, width: number ): void {
        const context = this.canvas.getContext('2d');
        const textDim = context.measureText(text);
        context.fillText(text, x + (width - textDim.width) / 2, y);
    }

    private loadImages( imageFiles: string[] ) {
        let loadCount = 0;
        const loadedImages = [];
        const loadTotal = imageFiles.length;
        this.preLoaded = false;

        for (let i = 0; i < imageFiles.length; i++) {
            const image = new Image();

            // Add onload event handler
            image.onload = () => {
                loadCount++;
                if (loadCount === loadTotal) {
                    // Done loading
                    this.preLoaded = true;
                }
            };

            // Set the source url of the image
            image.src = '/assets/images/games/snake/' + imageFiles[i];

            // Save to the image array
            loadedImages[i] = image;
        }

        return loadedImages;
    }

    private main( tframe: number ): void {
        // Request animation frames
        window.requestAnimationFrame(( timestamp ) => this.main(timestamp));

        if (!this.initialized) {
            if (this.preLoaded) {
                this.initialized = true;
            }
        } else {
            this.update(tframe);
            this.render();
        }
    }

    // Update the game state
    // http://rembound.com/articles/how-to-make-a-html5-canvas-game
    private update( tframe: number ): void {
        const dt = (tframe - this.lastFrame) / 1000;
        this.lastFrame = tframe;

        // Update the fps counter
        this.updateFps(dt);

        if (!this.gameOver) {
            this.updateGame(dt);
        } else {
            this.gameOverTime += dt;
        }
    }

    private updateFps( dt: number ): void {
        if (this.fpsTime > 0.25) {
            // Calculate fps
            this.fps = Math.round(this.frameCount / this.fpsTime);

            // Reset time and framecount
            this.fpsTime = 0;
            this.frameCount = 0;
        }

        // Increase time and framecount
        this.fpsTime += dt;
        this.frameCount++;
    }

    private updateGame( dt: number ): void {
        if (this.snake.tryMove(dt)) {
            const nextMove = this.snake.nextMove();
            const nextX = nextMove.x;
            const nextY = nextMove.y;

            if (nextX >= 0 && nextX < GameStatic.columns && nextY >= 0 && nextY < GameStatic.rows) {
                if (this.tiles[nextY][nextX].content === TileContent.Wall) {
                    // collision with wall
                    this.gameOver = true;
                }

                // collision with the snake body
                for (const segment of this.snake.segments) {
                    if (nextX === segment.x && nextY === segment.y) {
                        this.gameOver = true;
                        break;
                    }
                }

                if (!this.gameOver) {
                    this.snake.move();

                    // check collision with the fruit
                    if (nextX === this.fruit.x && nextY === this.fruit.y) {
                        this.snake.grow();
                        const scores = this.scores + this.fruit.type.value;
                        this.setScores(scores);
                        this.addFruit();
                    }
                }

            } else {
                // out of bounds
                this.gameOver = true;
            }

            if (this.gameOver) {
                this.gameOverTime = 0;
            }
        }
    }

    private render() {
        this.drawGrid();
        this.drawFruit();
        this.drawSnake();

        // Game over
        if (this.gameOver) {
            this.drawGameOverBoard();
        }
    }

    private setScores( scores: number ): void {
        this.scores = scores;
        this.scoresSubject.next(this.scores);

        if (this.scores > this.best) {
            this.setBestScores(scores);
        }
    }

    private setBestScores( scores: number ): void {
        this.best = scores;
        this.bestSubject.next(this.best);
        localStorage.setItem('game-snake-best', this.best.toString());
    }
}
