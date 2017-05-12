import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../animation/core';

import { AppSerice } from '../app.service';
import { App } from '../app.model';

@Component({
    selector: 'p-about',
    templateUrl: 'about.component.html',
    styleUrls: [ 'about.component.css' ],
    animations: [ fadeInAnimation.fadeInWide ],
    host: { '[@fadeInWide]': '' }
})
export class AboutComponent implements OnInit {
    
    app: App;
    
    constructor(private appService: AppSerice) { }
    
    ngOnInit(): void {
        this.app = this.appService.getApp();
    }
}