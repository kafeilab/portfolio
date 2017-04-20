import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';
import { CoverLetterComponent } from './coverletter/cover-letter.component';
import { CVComponent } from './cv/cv.component';

@NgModule( {
    declarations: [
        AboutComponent,
        CoverLetterComponent,
        CVComponent
    ],
    imports: [AboutRoutingModule]
})
export class AboutModule {

}
