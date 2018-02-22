/**
 * galleria.component
 */

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlIntroductionService } from '../owl-introduction.service';
import { OwlGalleriaImage } from '../../../../npmdist/owl-ng';

@Component({
    selector: 'app-owl-galleria',
    templateUrl: './galleria.component.html',
    styleUrls: ['./galleria.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
})

export class OwlNGGalleriaComponent implements OnInit {

    public showFilmStrip = true;

    public activeImage = 0;

    public images: OwlGalleriaImage[] = [
        {
            src: 'https://picsum.photos/800/550/?image=1001',
            alt: 'Description for Image 1',
            desc: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            src: 'https://picsum.photos/800/550/?image=1000',
            alt: 'Description for Image 2',
            desc: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            src: 'https://picsum.photos/800/550/?image=999',
            alt: 'Description for Image 3',
            desc: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            src: 'https://picsum.photos/800/550/?image=998',
            alt: 'Description for Image 4',
            desc: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            src: 'https://picsum.photos/800/550/?image=997',
            alt: 'Description for Image 5',
            desc: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            src: 'https://picsum.photos/800/550/?image=996',
            alt: 'Description for Image 6',
            desc: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            src: 'https://picsum.photos/800/550/?image=995',
            alt: 'Description for Image 7',
            desc: 'Description for Image 7',
            title: 'Title 7'
        },
        {
            src: 'https://picsum.photos/800/550/?image=994',
            alt: 'Description for Image 8',
            desc: 'Description for Image 8',
            title: 'Title 8'
        },
        {
            src: 'https://picsum.photos/800/550/?image=993',
            alt: 'Description for Image 9',
            desc: 'Description for Image 9',
            title: 'Title 9'
        },
        {
            src: 'https://picsum.photos/800/550/?image=992',
            alt: 'Description for Image 10',
            desc: 'Description for Image 10',
            title: 'Title 10'
        },
        {
            src: 'https://picsum.photos/800/550/?image=991',
            alt: 'Description for Image 11',
            desc: 'Description for Image 11',
            title: 'Title 11'
        },
        {
            src: 'https://picsum.photos/800/550/?image=990',
            alt: 'Description for Image 12',
            desc: 'Description for Image 12',
            title: 'Title 12'
        }
    ];

    constructor( private introductionService: OwlIntroductionService ) {
    }

    public ngOnInit() {
        this.introductionService.setIntroduction({
            title: 'Owl Galleria',
            desc: 'Owl Galleria is an Angular component that displays image contents and animates them'
        });
    }
}
