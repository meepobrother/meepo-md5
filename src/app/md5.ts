import { Injectable } from '@angular/core';
import * as md5 from 'blueimp-md5';
@Injectable()
export class Md5Service {

    constructor() {
        console.log(md5);
    }

    md5(s: string) {

    }
}