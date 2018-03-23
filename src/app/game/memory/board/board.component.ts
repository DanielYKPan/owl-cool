import {
    Component, OnInit, ChangeDetectionStrategy, HostBinding, AfterContentInit, ViewChild,
    ElementRef, OnDestroy, ChangeDetectorRef
} from '@angular/core';
import * as fromMemory from '../store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Tile } from '../store/tile.model';
import { GameService } from '../store/game.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-game-memory-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit, AfterContentInit, OnDestroy {

    public tiles$: Observable<Tile[]>;

    public moves$: Observable<number>;

    public time: number;

    private intervalId: any;

    private timeoutId: any;

    private timerStartSub: Subscription;

    @HostBinding('class.game-memory-board')
    get gameMemoryBoardClass(): boolean {
        return true;
    }

    @ViewChild('panel') gamePanelElmRef: ElementRef;

    get tileSize(): number {
        return this.gamePanelElmRef.nativeElement.offsetWidth / 6;
    }

    constructor( private store: Store<fromMemory.MemoryState>,
                 private gameService: GameService,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
        this.tiles$ = this.store.pipe(select(fromMemory.getTiles));

        this.moves$ = this.store.pipe(select(fromMemory.getMoves));

        this.timerStartSub = this.gameService.startTimer$.subscribe(() => {
            this.startTimer();
        });

        this.newGame();
    }

    public ngAfterContentInit(): void {
    }

    public ngOnDestroy(): void {
        this.clearInterval();
        this.clearTimeout();
        this.timerStartSub.unsubscribe();
    }

    public newGame(): void {
        this.gameService.newGame();
    }

    public flipTile( tile: Tile ): void {
        const shouldCheckMatch = this.gameService.revealTile(tile);

        if (shouldCheckMatch) {
            this.clearTimeout();
            this.timeoutId = setTimeout(() => {
                this.gameService.checkMatch(tile);
            }, 800);
        }
    }

    private startTimer(): void {
        this.clearInterval();
        this.time = 5;

        this.intervalId = setInterval(() => {
            this.time -= 1;

            if (this.time === 0) {
                this.clearInterval();
                this.gameService.coverAllTiles();
            }

            this.cdRef.markForCheck();

        }, 1000);
    }

    private clearInterval(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private clearTimeout(): void {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }

    public trackByFn( index: number, tile: Tile ): string {
        return tile.id;
    }
}
