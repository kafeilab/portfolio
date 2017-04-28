import { Component, OnInit } from '@angular/core';

import { AppSerice } from '../app.service';

import { App } from '../app.model';

@Component({
    selector: 'p-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    
    app: App;
    
    constructor(private appService: AppSerice) { }
    
    ngOnInit(): void {
       this.app = this.appService.getApp(); 
    }
}