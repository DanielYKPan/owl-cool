import {
    Component, OnInit, ChangeDetectionStrategy, HostListener, ViewChild, ElementRef,
    AfterContentInit
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GamePhotos } from '../store/game.reducer';
import * as fromPuzzle from '../store';
import * as GameActions from '../store/game.actions';
import { Observable } from 'rxjs/Observable';
import { Tile } from '../store/tile.model';

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameBoardComponent implements OnInit, AfterContentInit {

    @ViewChild('puzzlePanel') puzzlePanelElmRef: ElementRef;

    private _frameSize: number;
    get frameSize(): number {
        return this._frameSize;
    }

    public selectedPhoto$: Observable<string>;

    public gameSize$: Observable<number>;

    public tiles$: Observable<Tile[]>;

    public gameStats$: Observable<any>;

    public showNumber = false;

    get gamePhotos(): string[] {
        return GamePhotos;
    }

    constructor( private store: Store<fromPuzzle.PuzzleState> ) {
    }

    public ngOnInit() {
        this.selectedPhoto$ = this.store.pipe(select(fromPuzzle.getSelectedPhoto));
        this.tiles$ = this.store.pipe(select(fromPuzzle.getTiles));
        this.gameStats$ = this.store.pipe(select(fromPuzzle.getGameStats));
        this.gameSize$ = this.store.pipe(select(fromPuzzle.getGameSize));
    }

    public ngAfterContentInit(): void {
        this.setFrameSize();
    }

    @HostListener('window:resize', ['$event'])
    public handleWindowsReside( event: any ): void {
        this.setFrameSize();
    }

    public clickPhoto( photoIndex: number ): void {
        this.store.dispatch(new GameActions.SelectPhoto(photoIndex));
    }

    public clickShuffle(): void {
        this.store.dispatch(new GameActions.BuildTiles());
    }

    public clickTile( tile: Tile ): void {
        if (tile.isBlank) {
            return;
        }
        this.store.dispatch(new GameActions.MoveTile(tile));
    }

    public changeLevel( val: number ): void {
        this.store.dispatch(new GameActions.ChangeGameSize(val));
    }

    public trackByFn( index: number, tile: Tile ): string {
        return tile.id;
    }

    private setFrameSize(): void {
        const width = this.puzzlePanelElmRef.nativeElement.offsetWidth * .9;
        const height = this.puzzlePanelElmRef.nativeElement.offsetHeight * .9;

        this._frameSize = width > height ? height : width;
    }
}
