import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';

@Component( {
    selector: 'portfolio',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    title: string = "BUNLONG TAING"
    
    constructor(
        private router: Router,
        private titleService: Title
    ) { }
    
    ngOnInit(): void {
        // set the title of the app
        this.titleService.setTitle(this.title);
        
        // scroll to top of page when navigate
        this.router
            .events
            .filter(e => e instanceof NavigationEnd)
            .subscribe(() => window.scrollTo(0, 0));
    }
}
