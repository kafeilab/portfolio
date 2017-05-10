import { Component, OnInit, Input } from '@angular/core';

import { PortfolioService } from './portfolio.service';
import { Image } from '../model/image.model';

@Component( {
    selector: 'p-portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.css']
})
export class Portfolio implements OnInit {
    
    @Input() heading: string;
    @Input() url: string;
    @Input() path: string;
    
    @Input() slice: number;

    imgs: Image[];

    constructor( private portfolioService: PortfolioService ) { }

    ngOnInit(): void {
        this.portfolioService
            .getImages(this.url)
            .subscribe(d => { this.imgs = d;});
        
    }
    
    getImagePath(i: Image): string {
        return this.path + i.file;
    }

}