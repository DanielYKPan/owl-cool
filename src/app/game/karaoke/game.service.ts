import { Injectable } from '@angular/core';
import { Particle } from './models';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private canvasAnimationId: any;

    private particles: Particle[];

    private context: any;

    private cw: number;

    private ch: number;

    constructor(private http: HttpClient) {
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
            map((res: any) => res.list)
        );
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
