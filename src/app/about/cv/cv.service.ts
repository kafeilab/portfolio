import { Injectable } from '@angular/core';

import { CV, CVDetail } from './cv.model';

@Injectable()
export class CVService {

    getCVs(): CV[] {
        return cv;
    }

}

const eduDetail: CVDetail[] = [
    new CVDetail( 'St Pius Culinary and Business Centre', true, false ),
    new CVDetail( 'Computer Graphics, May 2016 - Present', false, true ),
    new CVDetail( 'Royal University of Phnom Penh', true, false ),
    new CVDetail( 'Computer Science, 2010 - 2014', false, true ),
    new CVDetail( 'ELT Elementary & Secondary School', true, false ),
    new CVDetail( 'High School, 2010', false, true )
];

const competenciesDetail: CVDetail[] = [
    new CVDetail( 'Web Development', true, false ),
    new CVDetail( 'Adobe Dreamweaver, Adobe Muse, HTML, CSS, JavaScript', false, true ),
    new CVDetail( 'Design', true, false ),
    new CVDetail( 'Adobe Illustrator, Adobe Photoshop, Adobe InDesign', false, true )
];

const languagesDetail: CVDetail[] = [
    new CVDetail( 'Khmer: Good', false, false ),
    new CVDetail( 'English: Good', false, false ),
    new CVDetail( 'French: Basic', false, false )
];

const personalInterestDetail: CVDetail[] = [
    new CVDetail( 'Design, Coding, researching, listening to music, and bicycling', false, false )
];

const cv: CV[] = [
    new CV( 'EDUCATION', eduDetail ),
    new CV( 'COMPETENCIES', competenciesDetail ),
    new CV( 'LANGUAGES CAPABILITY', languagesDetail ),
    new CV( 'PERSONAL INTEREST', personalInterestDetail )
];

