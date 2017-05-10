import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillComponent } from './skill.component';
import { SkillService } from './skill.service';

@NgModule({
    declarations: [ SkillComponent ],
    imports: [ CommonModule ],
    exports: [ SkillComponent ],
    providers: [ SkillService ]
})
export class SkillModule { }
