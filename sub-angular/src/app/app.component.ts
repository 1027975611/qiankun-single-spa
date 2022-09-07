import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import actions from "../shared/actions";
@Component({
  selector: 'app1-root', // 此处不能和基座项目的根组件选择器相同
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'sub-angular';
  state:any = {}
  strawberry = assetUrl('/img/strawberry.jpg')
  ngOnInit(){

    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange((state:any) => {
      this.state = state
      console.log('csdeskweb-desk获取到信息', state);
    }, true);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('卸载angular');

  }

  edit(){
    let state = { user: 'angular' + Math.round(Math.random() * 100), }
    actions.setGlobalState(state)
    // singleSpaPropsSubject.subscribe(async (props: any) => {
    //   props.setGlobalState(state);
    // });
  }
}
