import { Component, OnInit } from '@angular/core';
import { setDefaultMountApp, start, runAfterFirstMounted, registerMicroApps } from 'qiankun'
import microApps from '../micro-app'
import store from '../store'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  microApps = microApps
  current = null
  state: any = store.getGlobalState()
   ngOnInit(): void {
     this.registerMicroApps(microApps);


    start();

    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted');
    });
  }

  /** 注册子项目 */
  registerMicroApps(apps:any): void {
    registerMicroApps(apps,
      {
        beforeLoad: [
          app => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
        beforeMount: [
          app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
        afterUnmount: [
          app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
      }
    );
  }

  goto(item?:any){
    if (!item){
      this.current = null
      history.pushState(null, 'main', '/')
      return
    }
    history.pushState(null, item.activeRule, item.activeRule)
    this.current = item.activeRule
   }
}
