import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import SharedModule from '../shared'

 @Component({
  selector: 'app1-root', // 此处不能和基座项目的根组件选择器相同
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'sub-angular';
  state:any = {}
  strawberry = assetUrl('/img/strawberry.jpg')
   shared = SharedModule.getShared();

  ngOnInit(){
    console.log(this.shared);

    // 使用 shared 获取 token
    const token = this.shared.getToken();
    console.log('token',token);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('卸载angular');

  }

  edit(){
    this.shared.setToken('55555555555555');
  }
}
