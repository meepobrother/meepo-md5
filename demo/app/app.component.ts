import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Md5Service } from '../../src/app/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    public md5: Md5Service
  ) {}
  ngOnInit(){
    console.log(this.md5.md5('value'));
  }
}
