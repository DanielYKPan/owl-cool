import { Injectable } from '@angular/core';
import { Particle } from './models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import './natural';
import { Subject } from 'rxjs/Subject';

const { Metaphone, SoundEx } = window['natural'];

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private static recognition: SpeechRecognition;

    private canvasAnimationId: any;

    private particles: Particle[];

    private context: any;

    private cw: number;

    private ch: number;

    /**
     * Alpha & space character regex
     *
     * @private
     * @readonly
     * @type {RegExp}
     * @memberOf GameService
     */
    private readonly ALPHA_REGEX: RegExp = /[^a-z\s]/gi;

    /**
     *
     * Double spaces regex
     *
     * @private
     * @type {RegExp}
     * @memberOf GameService
     */
    private readonly DOUBLESPACES_REGEX: RegExp = /\s\s+/g;

    private lyricsLinesRefreshed$ = new Subject<any>();
    get lyricsLinesRefreshed(): Observable<any> {
        return this.lyricsLinesRefreshed$.asObservable();
    }

    constructor( private http: HttpClient ) {
    }

    public buildBackgroundCanvas( canvas: HTMLCanvasElement, cw: number, ch: number ): void {

        this.clearCanvasAnimationId();

        this.context = canvas.getContext('2d');
        this.particles = [];
        this.cw = cw;
        this.ch = ch;
        for (let i = 0; i < 30; i++) {
            this.particles.push(new Particle(this.context, cw, ch));
        }

        this.drawParticles();
    }

    public clearCanvasAnimationId(): void {
        if (this.canvasAnimationId) {
            window.cancelAnimationFrame(this.canvasAnimationId);
            this.canvasAnimationId = null;
        }
    }

    public getSongList(): Observable<any> {
        return this.http.get('assets/game-karaoke/song-list.json').pipe(
            map(( res: any ) => res.list)
        );
    }

    public getSongLyrics( src: string ): Observable<any> {
        return this.http.get(src, {responseType: 'text'});
    }

    public getRecognition(): SpeechRecognition {
        if (GameService.recognition) {
            return GameService.recognition;
        }

        const recognition = new (
            window['SpeechRecognition'] || window['webkitSpeechRecognition'] ||
            window['mozSpeechRecognition'] || window['msSpeechRecognition']
        )() as SpeechRecognition;
        recognition.continuous = true;
        recognition.interimResults = true;

        return recognition;
    }

    /**
     * Calculates number of word matches between speech and last 5 lines of lyrics
     *
     * @param {string} speech Spoken text
     * @param {string[]} lines Last 5 lines of song lyrics
     * @returns {number} Number of exact matches found
     *
     * @memberOf GameService
     */
    public countMatches( speech: string, lines: string[] ): number {
        let matches = 0;

        const speechWordsList = speech
            .trim()
            .toLowerCase()
            .replace(this.ALPHA_REGEX, '')
            .replace(this.DOUBLESPACES_REGEX, ' ')
            .split(' ');

        const linesWordsList = lines
            .map((line) => line
                .trim()
                .toLowerCase()
                .replace(this.ALPHA_REGEX, '')
                .replace(this.DOUBLESPACES_REGEX, ' ')
                .split(' ')
            )
            .reduce((a, b) => a.concat(b), []);

        // Goes through each word in speech and tries to find a match in lyric lines
        speechWordsList.forEach((wordFromSpeech) => {
            const indexInLyrics = linesWordsList.findIndex(
                (wordFromLyrics) => wordFromSpeech === wordFromLyrics
                    || Metaphone.compare(wordFromSpeech, wordFromLyrics)
                    || SoundEx.compare(wordFromSpeech, wordFromLyrics)
            );

            if (indexInLyrics >= 0) {
                // console.log('match', wordFromSpeech, linesWordsList[indexInLyrics])
                // remove word from list
                linesWordsList.splice(indexInLyrics, 1);

                // increase number of matches
                matches++;
            }
        });

        return matches;
    }

    public emitLyricsLinesRefreshed(): void {
        this.lyricsLinesRefreshed$.next(true);
    }

    private drawParticles(): void {
        this.canvasAnimationId = window.requestAnimationFrame(() => this.drawParticles());
        this.context.clearRect(0, 0, this.cw, this.ch);
        this.particles.map(( p ) => {
            p.rot += p.rotSpeed;
            p.update();
            p.draw();
        });
    }
}
