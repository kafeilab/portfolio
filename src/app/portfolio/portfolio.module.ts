import { NgModule } from '@angular/core';

import { ElementModule } from '../element/element.module';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
    declarations: [ PortfolioComponent ],
    imports: [ ElementModule ]
})
export class PortfolioModule { }
