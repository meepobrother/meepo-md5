import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Md5Service } from './md5';

@NgModule({})
export class Md5Module {
    public static forRoot(): ModuleWithProviders{
        return {
            ngModule: Md5Module,
            providers: [
                Md5Service
            ]
        }
    }
}
export { Md5Service } from './md5';
