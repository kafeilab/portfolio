import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';
import { CoverLetterComponent } from './coverletter/cover-letter.component';
import { CVComponent } from './cv/cv.component';

import { CoverLetterService } from './coverletter/cover-letter.service';
import { CVService } from './cv/cv.service';

@NgModule( {
    declarations: [
        AboutComponent,
        CoverLetterComponent,
        CVComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule
    ],
    providers: [
        CoverLetterService,
        CVService
    ]
})
export class AboutModule {

}
