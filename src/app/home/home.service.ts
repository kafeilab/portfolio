import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

//    path: string = '../../../assets/';
    path: string = '/assets/';
    carousels: string[] = [
        'Image01.JPG',
        'Image02.JPG',
        'Image03.JPG',
        'Image04.JPG'
    ];

    getCarousels(): string[] {
        return this.carousels.map(c => this.path + c);
    }
}