import { Component, OnInit } from '@angular/core';
import { start, runAfterFirstMounted, registerMicroApps } from 'qiankun'
import microApps  from '../micro-app'
import shared from "../shared";
import { ActivatedRoute, Router, Params } from '@angular/router'
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
     ) { }
   microApps = microApps
   current:any = document.location.pathname
   state: any = shared.getToken()
   ngOnInit(): void {

     //  this.state =actions.onGlobalStateChange((newState:any) => this.state = newState,true)
   }
  ngAfterViewInit(): void {
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
      this.current = '/'
      history.pushState(null, 'main', '/')
      return
    }
    history.pushState(null, item.activeRule, item.activeRule)
    this.current = item.activeRule
   }

  editStore(){
  //   actions.setGlobalState({
  //     user: 'main' + Math.round(Math.random() * 100),
  //  });
    this.current = '/sub-vue3'
    this.router.navigate(['/sub-vue3'])
    shared.setToken('111111233232323');
    }

   edit(){
     let token= 'Vue设置的token' + Math.round(Math.random() * 100)
     shared.setToken(token);
   }
}
