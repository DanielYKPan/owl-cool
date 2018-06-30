import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SongInform } from '../models';
import { GameService } from '../game.service';

@Component({
    selector: 'app-game-karaoke-song-player',
    templateUrl: './song-player.component.html',
    styleUrls: ['./song-player.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongPlayerComponent implements OnInit {

    @Input() song: SongInform;

    public currentTime: number;
    public isPlaying: boolean = false;
    public points: number = 0;
    public lines: string[] = [];
    private lineCount: number = 0;

    private readonly POINTS_MULTIPLIER = 5;

    constructor( private gameService: GameService,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
    }

    public playPauseAudio( status: boolean ) {
        this.isPlaying = status;
    }

    public updateAudioTime( time: number ) {
        this.currentTime = time;
    }

    public handleLyricsNewLine( line: string ): void {
        this.lines = [line].concat(this.lines).slice(0, 5);
        this.lineCount += 1;

        if (this.lineCount === 5) {
            this.lineCount = 0;
            this.gameService.emitLyricsLinesRefreshed();
        }
    }

    public handleLyricsEnd(): void {
        this.lineCount = 0;
        this.gameService.emitLyricsLinesRefreshed();
        console.log('the end');
    }

    public handleSpeechFound( text: string ): void {
        console.log('[speech match]: ', text);
        const matches = this.gameService.countMatches(text, this.lines);
        this.points += (matches * this.POINTS_MULTIPLIER);
        this.cdRef.markForCheck();
    }
}
