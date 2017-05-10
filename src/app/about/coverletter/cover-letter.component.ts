import { Component, OnInit } from '@angular/core';

import { CoverLetterService } from './cover-letter.service';
import { AboutText } from '../about.model';

@Component( {
    selector: 'p-cover-letter',
    templateUrl: 'cover-letter.component.html',
    styleUrls: ['cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {
    
    coverLetter: AboutText;

    constructor(
        private cvService: CoverLetterService
    ) { }
    
    ngOnInit(): void {
        this.coverLetter = this.cvService.getCoverLetter();
    }

}
