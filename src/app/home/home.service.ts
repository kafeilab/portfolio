import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

//    path: string = '../../../assets/';
    path: string = '/assets/banner/';
    carousels: string[] = [
        'WineBotterBannerWeb-01.jpg',
        'NarrowsBrochure-01.jpg',
        'VilaJoya-01.jpg',
        'DavidTea-01.jpg',
        'A_W-01.jpg',
        'Packaging-01.jpg'
    ];

    getCarousels(): string[] {
        return this.carousels.map(c => this.path + c);
    }
}