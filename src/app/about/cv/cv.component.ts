import { Component, OnInit } from '@angular/core';

import { CVService } from './cv.service';
import { CV } from './cv.model';

@Component({
    selector: 'p-cv',
    templateUrl: 'cv.component.html',
    styleUrls: [ 'cv.component.css' ]
})
export class CVComponent implements OnInit {
    
    cvs: CV[];
    
    constructor(private cvService: CVService) { }
    
    ngOnInit(): void {
        this.cvs = this.cvService.getCVs();
    }
}