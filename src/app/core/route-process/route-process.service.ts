/**
 * route-process.service
 */

import { Injectable } from '@angular/core';
import { Subject ,  Observable } from 'rxjs';

@Injectable()
export class RouteProcessService {

    private progress = 0;

    private intervalId: any;

    private processChange$ = new Subject<number>();
    get processChange(): Observable<number> {
        return this.processChange$.asObservable();
    }

    constructor() {
    }

    public start(): void {
        this.clearInterval();
        this.startBarProcess();
    }

    public complete(): void {
        this.clearInterval();
        this.progress = 1;
        this.processChange$.next(this.progress);
    }

    private startBarProcess(): void {
        this.progress = 0;
        this.processChange$.next(this.progress);
        this.intervalId = setInterval(() => {
            // Increment the progress and update view component
            this.trickle();
            // If the progress is 100% - call complete
            if (this.progress === 1) {
                this.clearInterval();
            }
        }, 200);
    }

    private trickle( amount?: number ): void {
        if (this.progress > 1) {
            return;
        }

        if (amount === undefined || amount === null) {
            if (this.progress >= 0 && this.progress < 0.2) {
                amount = 0.1;
            } else if (this.progress >= 0.2 && this.progress < 0.5) {
                amount = 0.04;
            } else if (this.progress >= 0.5 && this.progress < 0.8) {
                amount = 0.02;
            } else if (this.progress >= 0.8 && this.progress < 0.99) {
                amount = 0.005;
            } else {
                amount = 0;
            }
        }

        this.progress = this.clamp(this.progress + amount, 0, 0.994);
        this.processChange$.next(this.progress);
    }

    private clamp( n: number, min: number, max: number ): number {
        if (n < min) {
            return min;
        }
        if (n > max) {
            return max;
        }
        return n;
    }

    private clearInterval(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
