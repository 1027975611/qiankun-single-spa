import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app1-root', // 此处不能和基座项目的根组件选择器相同
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'sub-angular';
  strawberry = assetUrl('/img/strawberry.jpg')
  ngOnInit(){

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('卸载angular');

  }
}
