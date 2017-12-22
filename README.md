# md5 for angular service

- [md5](https://github.com/blueimp/JavaScript-MD5)


```ts
import { Md5Module } from 'meepo-md5';
@NgModule({
  imports: [
    Md5Module.forRoot()
  ]
})
export class AppModule { }


```


```ts
import { Md5Service } from 'meepo-md5';

export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    public md5: Md5Service
  ) {}
  ngOnInit(){
    console.log(this.md5.md5('value'));
  }
}
```