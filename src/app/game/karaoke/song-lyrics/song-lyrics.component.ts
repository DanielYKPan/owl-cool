import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import { GameService } from '../game.service';
import * as LRC from 'lrc.js/dist/lrc';
import { Line, LyricLRC } from '../models';

@Component({
    selector: 'app-game-karaoke-song-lyrics',
    templateUrl: './song-lyrics.component.html',
    styleUrls: ['./song-lyrics.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongLyricsComponent implements OnInit, OnChanges {

    @Input() src: string;
    @Input() currentTime = 0;
    @Input() delay = 0;

    @Output() updateNewLine = new EventEmitter<string>();
    @Output() lyricsEnd = new EventEmitter<any>();
    @Output() loaded = new EventEmitter<any>();

    public currentLineIndex = -1;
    public lyrics: LyricLRC;
    public lines: Line[] = [];

    private ended = false;

    constructor( private gameService: GameService,
                 private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
        this.loadLyrics();
    }

    public ngOnChanges( changes: SimpleChanges ): void {
        if (changes['currentTime'] &&
            !changes['currentTime'].isFirstChange()) {
            this.setCurrentLine(this.currentTime);
        }
    }

    public loadLyrics(): void {
        this.gameService.getSongLyrics(this.src)
            .subscribe(( res: any ) => {
                this.processLyrics(res);
            });
    }

    private processLyrics( lrcText: string ) {
        this.lyrics = LRC.parse(lrcText);
        this.currentLineIndex = -1;
        this.lines = [];
        this.loaded.emit();
        this.cdRef.markForCheck();
    }

    private setCurrentLine( currentTime: number ): void {

        if (!this.lyrics) {
            return;
        }

        currentTime += this.delay;
        const {lines} = this.lyrics;
        const lineIndex = lines.findIndex(( line ) => (line.time >= currentTime));
        const previousLine = lines[this.currentLineIndex];
        const nextLine = lines[lineIndex];
        const currentLineIndex = (lineIndex - 1);
        const currentLine = (lineIndex > 0)
            ? lines[currentLineIndex]
            : null;

        if (currentLine && currentLine !== previousLine) {
            this.currentLineIndex = currentLineIndex;
            this.updateNewLine.emit(currentLine.text);

            if (this.ended) {
                this.ended = false;
            }

            if (!this.lines.length) {
                this.lines.push({index: currentLineIndex, text: currentLine.text});
            }

            if (nextLine) {
                const ls = this.lines.concat([{index: lineIndex, text: nextLine.text}]);

                if (ls.length >= 4) {
                    ls.shift();
                }

                this.lines = ls;
            }
        }

        if (currentLineIndex === -2 && !this.ended) {
            this.ended = true;
            this.lyricsEnd.emit(true);
        }

        this.cdRef.markForCheck();
    }
}
