import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import { GameService } from './game.service';

@Component({
    selector: 'app-game-karaoke',
    templateUrl: './karaoke.component.html',
    styleUrls: ['./karaoke.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KaraokeComponent implements OnInit, AfterContentInit, OnDestroy {

    @ViewChild('backgroundCanvas') backgroundCanvasElmRef: ElementRef;

    public canvasWidth: number;

    public canvasHeight: number;

    private canvasAnimationId: any;

    @HostBinding('class.game-karaoke')
    get gameKaraokeClass(): boolean {
        return true;
    }

    constructor( private gameService: GameService ) {
    }

    public ngOnInit() {
    }

    public ngAfterContentInit(): void {
        this.buildBackgroundCanvas();
    }

    public ngOnDestroy(): void {
        this.gameService.clearCanvasAnimationId();
    }

    private buildBackgroundCanvas(): void {

        if (this.canvasAnimationId) {
            window.cancelAnimationFrame(this.canvasAnimationId);
            this.canvasAnimationId = null;
        }

        const canvas = this.backgroundCanvasElmRef.nativeElement;
        this.canvasHeight = window.innerHeight;
        this.canvasWidth = window.innerWidth;
        this.gameService.buildBackgroundCanvas(canvas, this.canvasWidth, this.canvasHeight);
    }
}
