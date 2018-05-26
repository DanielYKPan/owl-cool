import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
    selector: 'app-game-karaoke-song-audio',
    templateUrl: './song-audio.component.html',
    styleUrls: ['./song-audio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongAudioComponent implements OnInit, AfterContentInit, OnDestroy {

    @Input() src: string;
    @Output() playPause = new EventEmitter<boolean>();
    @Output() updateTime = new EventEmitter<number>();

    public currentTime: string | number = 0;
    public duration: string | number = 0;
    public isPlaying = false;

    private audio: HTMLAudioElement;
    private timeSubscription = Subscription.EMPTY;
    private loadSubscription = Subscription.EMPTY;

    constructor( private cdRef: ChangeDetectorRef ) {
    }

    public ngOnInit() {
        this.audio = this.initAudio();
    }

    public ngAfterContentInit(): void {
        this.loadAudioSource(this.src);

        this.timeSubscription = fromEvent(this.audio, 'timeupdate')
            .subscribe(() => {
                this.currentTime = this.audio.currentTime;
                this.updateTime.emit(this.audio.currentTime);
                this.cdRef.markForCheck();
            });

        this.timeSubscription = fromEvent(this.audio, 'loadeddata')
            .subscribe(() => {
                this.duration = this.audio.duration;
                this.cdRef.markForCheck();
            });

        // Subscribe other events
        this.audio.addEventListener('playing', () => this.setPlayerStatus(true));
        this.audio.addEventListener('pause', () => this.setPlayerStatus(false));
    }

    public ngOnDestroy(): void {

        this.timeSubscription.unsubscribe();
        this.loadSubscription.unsubscribe();

        this.loadAudioSource('');
        this.audio.load();
    }

    public playPauseAudio(): void {
        this.audio.paused ?
            this.audio.play() : this.audio.pause();
        this.cdRef.markForCheck();
    }

    private initAudio(): HTMLAudioElement {
        const audio = new Audio();
        audio['autobuffer'] = true;
        audio.autoplay = false;
        audio.preload = 'auto';

        return audio;
    }

    private loadAudioSource( src: string ) {
        this.audio.pause();
        this.audio.src = src;
        this.setPlayerStatus(false);
    }

    private setPlayerStatus( status: boolean ): void {
        this.playPause.emit(status);
        this.isPlaying = status;
        this.cdRef.markForCheck();
    }
}
