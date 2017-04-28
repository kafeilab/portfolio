export class App {
    
    firstName: string;
    lastName: string;
    job: string;
    address: string;
    postalCode: string;
    phone: string;
    email: string;
    copyright: string;

    constructor() { }
    
    public getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}