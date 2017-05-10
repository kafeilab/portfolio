import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementModule } from '../element/element.module';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule( {
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        ElementModule
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {

}