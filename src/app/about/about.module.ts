import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ElementModule } from '../element/element.module';

import { AboutComponent } from './about.component';
import { MeComponent } from './me/me.component';
import { CVComponent } from './cv/cv.component';

import { MeService } from './me/me.service';
import { CVService } from './cv/cv.service';

@NgModule( {
    declarations: [
        AboutComponent,
        MeComponent,
        CVComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        ElementModule
    ],
    providers: [
        MeService,
        CVService
    ]
})
export class AboutModule {

}
