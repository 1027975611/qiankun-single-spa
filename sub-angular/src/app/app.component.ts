import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import actions from 'src/shared'

 @Component({
  selector: 'app1-root', // 此处不能和基座项目的根组件选择器相同
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
   constructor(
     private changeDetectorRef: ChangeDetectorRef
    ) { }
  title = 'sub-angular';
   strawberry = assetUrl('/img/strawberry.jpg')
   state:any =null
   value:any =null

  ngOnInit(){
    actions.onGlobalStateChange((newState: any) => {
      this.state = newState
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    },true)
    // // 使用 shared 获取 token
    // const token = this.shared.getToken();
    // console.log('token',token);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('卸载angular');

  }

  edit(){
    actions.setGlobalState({ mainuser :this.value});
  }
}
