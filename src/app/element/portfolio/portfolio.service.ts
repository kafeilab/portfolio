import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Image } from '../model/image.model';

@Injectable()
export class PortfolioService {
    
    constructor(private http: Http) { }
    
    getImages(url: string): Observable<Image[]> {
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        return res.json() as Image[] || { };
    }
    
    private handleError(res: Response | any) {
        // TODO handle the error here
        return "TODO Handle the error here";
    }
}