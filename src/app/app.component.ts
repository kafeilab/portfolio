import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component( {
    selector: 'portfolio',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    constructor(private router: Router) { }
    
    ngOnInit(): void {
        this.router
            .events
            .filter(e => e instanceof NavigationEnd)
            .subscribe(() => window.scrollTo(0, 0));
    }
}
