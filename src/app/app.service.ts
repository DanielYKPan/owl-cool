/**
 * app.service
 */

import { Injectable } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Observable ,  Subject } from 'rxjs';

export const DESKTOP_VIEW_SIZE = 1024;

@Injectable()
export class AppService {

    private viewPortSizeChange$ = new Subject<any>();

    get viewPortSizeChange(): Observable<any> {
        return this.viewPortSizeChange$.asObservable();
    }

    private _isDesktopSize: boolean;
    get isDesktopSize(): boolean {
        return this._isDesktopSize;
    }

    constructor( private viewportRuler: ViewportRuler ) {
    }

    public checkIsDesktopSize(): void {
        const viewPostSize = this.viewportRuler.getViewportSize();
        this._isDesktopSize = viewPostSize.width >= DESKTOP_VIEW_SIZE;
        this.viewPortSizeChange$.next({
            width: viewPostSize.width,
            height: viewPostSize.height,
            isDesktopSize: this._isDesktopSize
        });
    }
}
