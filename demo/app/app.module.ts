import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Md5Module } from '../../src/app/app';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Md5Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

