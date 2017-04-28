export class CV {

    constructor(
        public heading: string,
        public detail: CVDetail[]
    ) { }

}

export class CVDetail {

    constructor(
        public value: string,
        public bold: boolean,
        public indent: boolean
    ) { }
    
}