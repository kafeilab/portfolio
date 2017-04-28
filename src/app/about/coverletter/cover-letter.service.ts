import { Injectable } from '@angular/core';

import { CoverLetter } from './cover-letter.model';

@Injectable()
export class CoverLetterService {

    public getCoverLetter(): CoverLetter {
        return cv;
    }

}

const p: string[] = [
    'Dear Sir or Madam',
    'I am very interested in working at your company, and would like to submit my CV for your kind consideration.',
    'I have the capability of designing like bunsiness logo, business card, poster, website and more. I am presently a graphic design student at St Pius Culinary and Business Centre.',
    'I am hardworking and good at communicating. In addition, I am motivated and enthusiastic, and would appreciate the opportunity to contribute to your company’s success. I hope my educational background fulfills your requirement. Even though I have no experience, I have acquired and equivalence skill level from practical research and learning.',
    'I can promise that meeting me will not be a waste of your time, and I will make myself available at your convenience. I am very much looking forward to hearing from you.',
    'Sincerely'
];
const s: string = "BUNLONG TAING";

const cv: CoverLetter = new CoverLetter( p, s );