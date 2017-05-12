import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation/core';

@Component( {
    templateUrl: './gallery.component.html',
    animations: [fadeInAnimation.fadeInWide],
    host: { '[@fadeInWide]': '' }
})
export class GalleryComponent { }