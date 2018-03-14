/**
 * board.component
 */

import {
    AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnDestroy, OnInit,
    ViewChild
} from '@angular/core';
import { GameService, SIZE } from '../service/game.service';
import { select, Store } from '@ngrx/store';
import * as from2048 from '../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-game-2048-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})

export class GameBoardComponent implements OnInit, AfterContentInit, OnDestroy {

    public cells$: Observable<string[]>;

    public cellSize: number;

    @ViewChild('wrapper') panelWrapperElmRef: ElementRef;

    @HostBinding('class.game-2048-board')
    get game2048BoardClass(): boolean {
        return true;
    }

    constructor( private gameService: GameService,
                 private store: Store<from2048.State> ) {
    }

    public ngOnInit() {
        this.newGame();

        this.cells$ = this.store.pipe(select(from2048.getGridCells));
    }

    public ngAfterContentInit(): void {
        this.cellSize = (this.panelWrapperElmRef.nativeElement.offsetWidth - 24) / SIZE;
    }

    public ngOnDestroy(): void {
    }

    private newGame(): void {
        this.gameService.newGame();
    }
}
