import { Component, OnInit } from '@angular/core';

import { SkillService } from './skill.service';
import { Skill } from './skill.model';

@Component({
    selector: 'p-skill-icon',
    templateUrl: 'skill.component.html',
    styleUrls: [ './skill.component.css' ]
})
export class SkillComponent implements OnInit {
    
    path: string = '/assets/app-icon/';
    skills: Skill[];

    constructor(private skillService: SkillService) { }
    
    ngOnInit(): void {
        this.skillService.getIcons()
            .subscribe(data => this.skills = data);
    }
    
    getImagePath(s: Skill): string {
        return this.path + s.file + '-128.png';
    }
    
}