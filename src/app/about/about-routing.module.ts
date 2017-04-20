import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { CoverLetterComponent } from './coverletter/cover-letter.component';
import { CVComponent } from './cv/cv.component';

const aboutRoutes: Routes = [
    {
        path: 'about', component: AboutComponent,
        children: [
            { path: '', redirectTo: 'coverletter', pathMatch: 'full' },
            { path: 'coverletter', component: CoverLetterComponent },
            { path: 'cv', component: CVComponent }
        ]
    }
];

@NgModule( {
    imports: [RouterModule.forChild( aboutRoutes )],
    exports: [RouterModule]
})
export class AboutRoutingModule { }