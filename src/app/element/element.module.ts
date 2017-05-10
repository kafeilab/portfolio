import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillModule } from './skill/skill.module';

import { Portfolio } from './portfolio/portfolio.component';
import { PortfolioService } from './portfolio/portfolio.service';

@NgModule( {
    declarations: [Portfolio],
    imports: [
        CommonModule,
        SkillModule
    ],
    exports: [
        Portfolio,
        SkillModule
    ],
    providers: [
        PortfolioService
    ]
})
export class ElementModule { }
