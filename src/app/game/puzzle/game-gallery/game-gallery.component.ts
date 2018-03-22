import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-puzzle-gallery',
    templateUrl: './game-gallery.component.html',
    styleUrls: ['./game-gallery.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameGalleryComponent implements OnInit {

    @Input() photos: string[];

    @Input() selectedPhoto: string;

    @Output() clickPhoto = new EventEmitter<number>();

    constructor() {
    }

    public ngOnInit() {
    }

    public handleClickOnPhoto( photo: string, photoIndex: number ): void {
        if (photo !== this.selectedPhoto) {
            this.clickPhoto.emit(photoIndex);
        }
    }

}
