import { Component } from '@angular/core';

import { MeService } from './me.service';
import { AboutText } from '../about.model';

@Component( {
    templateUrl: 'me.component.html',
    styleUrls: [ 'me.component.css' ]
})
export class MeComponent {
    meText: AboutText;

    constructor(
        private meService: MeService
    ) { }

    ngOnInit(): void {
        this.meText = this.meService.getMyText();
    }
}