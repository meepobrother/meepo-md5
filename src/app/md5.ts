import { Injectable } from '@angular/core';
declare const require: any;
const md5 = require('blueimp-md5');
@Injectable()
export class Md5Service {

    constructor() { }

    md5(s: string, key?: string, isRow?: boolean): string {
        return md5(s, key, isRow);
    }
}