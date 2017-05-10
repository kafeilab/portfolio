import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { MeComponent } from './me/me.component';
import { CVComponent } from './cv/cv.component';

const aboutRoutes: Routes = [
    {
        path: 'about', component: AboutComponent,
        children: [
            { path: '', redirectTo: 'me', pathMatch: 'full' },
            { path: 'me', component: MeComponent },
            { path: 'cv', component: CVComponent }
        ]
    }
];

@NgModule( {
    imports: [RouterModule.forChild( aboutRoutes )],
    exports: [RouterModule]
})
export class AboutRoutingModule { }