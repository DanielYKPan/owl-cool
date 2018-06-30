import { Directive, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameService } from '../game.service';
import { fromEvent, merge, Subscription } from 'rxjs';
import { distinct, filter, map, timeout } from 'rxjs/internal/operators';

@Directive({
    selector: 'app-game-karaoke-song-speech, [appGameKaraokeSongSpeech]'
})
export class SongSpeechDirective implements OnInit, OnChanges, OnDestroy {

    @Input() isPlaying: boolean;

    @Output() speechFound = new EventEmitter<string>();

    private recognition: SpeechRecognition;
    private isRecording = false;
    private isAutoRestarting = false;
    private recognitionStartSub = Subscription.EMPTY;
    private recognitionEndSub = Subscription.EMPTY;
    private recognitionResultSub = Subscription.EMPTY;
    private lyricsLinesRefreshedSub = Subscription.EMPTY;

    constructor( private gameService: GameService ) {
    }

    public ngOnInit(): void {
        this.recognition = this.gameService.getRecognition();
        const result$ = fromEvent(this.recognition, 'result');
        const start$ = fromEvent(this.recognition, 'start');
        const stop$ = fromEvent(this.recognition, 'stop');
        const end$ = fromEvent(this.recognition, 'end');

        // force to stops the speech recognition service
        // and return a SpeechRecognitionResult using the audio captured so far.
        this.lyricsLinesRefreshedSub = this.gameService.lyricsLinesRefreshed
            .subscribe(() => {
                if (this.isRecording) {
                    this.isAutoRestarting = true;
                    this.recognition.stop();
                }
            });

        this.recognitionStartSub = start$
            .subscribe(() => {
                this.isRecording = true;

                // TODO: need to simplify this
                result$.pipe(timeout(5000)).subscribe(null, () => {
                    if (this.isRecording) {
                        // console.log('timeout, restarting...');
                        this.isAutoRestarting = true;
                        this.recognition.stop();
                    }
                });
            });

        this.recognitionEndSub = merge(stop$, end$)
            .subscribe(( res: any ) => {
                if (this.isAutoRestarting) {
                    this.isAutoRestarting = false;
                    this.recognition.start();
                } else {
                    this.isRecording = false;
                }
            });

        this.recognitionResultSub = result$
            .pipe(
                map(( e: SpeechRecognitionEvent ) => e.results[e.results.length - 1]),
                filter(( result: SpeechRecognitionResult ) => result.isFinal),
                map(( result: SpeechRecognitionResult ) => result[0].transcript),
                distinct()
            )
            .subscribe(( text: string ) => {
                this.speechFound.emit(text);
            });
    }

    public ngOnDestroy(): void {
        this.recognitionStartSub.unsubscribe();
        this.recognitionEndSub.unsubscribe();
        this.recognitionResultSub.unsubscribe();
        this.lyricsLinesRefreshedSub.unsubscribe();
    }

    public ngOnChanges( changes: SimpleChanges ): void {
        if (changes['isPlaying'] &&
            !changes['isPlaying'].isFirstChange()) {
            if (this.isPlaying && !this.isRecording) {
                this.recognition.start();
            } else if (!this.isPlaying && this.isRecording) {
                this.recognition.stop();
            }
        }
    }
}
