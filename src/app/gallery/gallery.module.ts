import { NgModule } from '@angular/core';

import { ElementModule } from '../element/element.module';

import { GalleryComponent } from './gallery.component';

@NgModule({
    declarations: [ GalleryComponent ],
    imports: [ ElementModule ]
})
export class GalleryModule { }
