import { Injectable } from '@angular/core';

import { App } from './app.model';

@Injectable()
export class AppSerice {
    
    getApp(): App {
        return app;
    }
}

const app: App = new App();
app.firstName = 'BUNLONG';
app.lastName = 'TAING';
app.job = 'Graphic Designer';
app.address = '3990 #313 Jarry Est Montreal';
app.postalCode = 'H1Z 0A5';
app.phone = '(514) 999 1544';
app.email = 'bunlong.taing@yahoo.com';
app.copyright = 'Copyright \u00A9 2017 - All Rights Reserved - ' + app.getFullName();