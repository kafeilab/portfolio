import { Injectable } from '@angular/core';

import { AboutText } from '../about.model';

@Injectable()
export class MeService {

    public getMyText(): AboutText {
        return meText;
    }

}

const p: string[] = [
    'I am presently a graphic design student at St Pius X Culinary and Business Centre. I have the capability of developing website and designing like business logo, business card, poster, and more.',
    'As a web and graphic designer, I have developed strong design and page layout skills in addition to a solid knowledge of Web Development. I am not only a team player to the core, but also at complete ease when working alone.',
    'Feel free to have a look at my portfolio and do not hesitate to contact me. I can promise that meeting me will not be a waste of your time, and I will make myself available at your convenience.'
];
const s: string = "BUNLONG TAING";

const meText: AboutText = new AboutText( p, s );

/*'Dear Sir or Madam',
'I am very interested in working at your company, and would like to submit my CV for your kind consideration.',
'I have the capability of designing like bunsiness logo, business card, poster, website and more. I am presently a graphic design student at St Pius Culinary and Business Centre.',
'I am hardworking and good at communicating. In addition, I am motivated and enthusiastic, and would appreciate the opportunity to contribute to your company’s success. I hope my educational background fulfills your requirement. Even though I have no experience, I have acquired and equivalence skill level from practical research and learning.',
'I can promise that meeting me will not be a waste of your time, and I will make myself available at your convenience. I am very much looking forward to hearing from you.',
'Sincerely'*/