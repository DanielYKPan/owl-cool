import {
    Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterContentInit,
    HostListener, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { GameService } from '../service/game.service';
import { Direction } from '../service/snake';
import { FRUIT_TYPES } from '../service/fruit';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-game-snake-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit, AfterContentInit, OnDestroy {

    @ViewChild('board') gameCanvasElmRef: ElementRef;

    public fruitTypes = FRUIT_TYPES;

    public scores: number;

    public best: number;

    private scoresSub = Subscription.EMPTY;

    private bestSub = Subscription.EMPTY;

    constructor( private gameService: GameService,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
        this.scoresSub = this.gameService.scores$
            .pipe(distinctUntilChanged())
            .subscribe(( val ) => {
                this.scores = val;
                this.cdRef.markForCheck();
            });

        this.bestSub = this.gameService.best$
            .pipe(distinctUntilChanged())
            .subscribe(( val ) => {
                this.best = val;
                this.cdRef.markForCheck();
            });
    }

    public ngAfterContentInit(): void {
        this.gameService.init(this.gameCanvasElmRef.nativeElement);
    }

    public ngOnDestroy(): void {
        this.scoresSub.unsubscribe();
        this.bestSub.unsubscribe();
    }

    @HostListener('window:keydown', ['$event'])
    public handleKeydownOnHost( event: KeyboardEvent ): void {
        const code = event.keyCode;
        switch (code) {
            case Direction.Left:
            case Direction.Up:
            case Direction.Right:
            case Direction.Down:
                this.gameService.setSnakeDirection(code);
                event.preventDefault();
                break;

            // space
            case 32:
                this.gameService.tryNewGame();
                event.preventDefault();
                break;

            default:
                return;
        }
    }
}
