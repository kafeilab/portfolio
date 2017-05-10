import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Skill } from './skill.model';

@Injectable()
export class SkillService {
    
    url: string = "/assets/data/skill.json";
    
    constructor(private http: Http) { }
    
    getIcons(): Observable<Skill[]> {
        return this.http
            .get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        /*let body = res.json();
        alert(body.data);
        return body.data;*/
        return res.json() as Skill[] || { };
    }
    
    private handleError(error: Response | any) {
        // TODO: HANDLE ERROR
        return "test";
    }
}