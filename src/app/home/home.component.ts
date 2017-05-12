import { Component, OnInit, HostBinding } from '@angular/core';

import { fadeInAnimation } from '../animation/core';

import { HomeService } from './home.service';

@Component( {
    selector: 'p-home',
    templateUrl: 'home.component.html',
    styleUrls: [
        'home.component.css'
    ],
    animations: [ fadeInAnimation.fadeInWide ],
    host: {'[@fadeInWide]': ''}
})
export class HomeComponent implements OnInit {
    
//    @HostBinding('@fadeInAnimation') fadeInAnimation = "";
    
    carousels: string[];
    
    constructor(public homeService: HomeService) { }
    
    ngOnInit(): void {
        this.carousels = this.homeService.getCarousels();
    }

}