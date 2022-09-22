import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { start, runAfterFirstMounted, registerMicroApps } from 'qiankun'
import Apps from 'src/micro-app'
import actions from "src/shared";
import { ActivatedRoute, Router, Params } from '@angular/router'
// import { ActionsService } from 'src/api/actions.service';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
     // public store:ActionsService
  ) { }
  loaderLoading: boolean = true;
  microApps = Apps
  current: any = document.location.pathname
  state: any = null
  value: string = ''
  ngOnInit(): void {
    actions.onGlobalStateChange((newState) => {
      this.state = newState
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    }, true)
    //  this.state =actions.onGlobalStateChange((newState:any) => this.state = newState,true)
  }

  ngAfterViewInit(): void {
    // 增加loading 效果
    const loader = (loading: boolean) => this.loaderLoading = loading;
    const apps = Apps.map(item => {
      return {
        ...item,
        container: '#subapp-viewport', // 子应用挂载的div
        loader,
        props: {
          routerBase: item.activeRule, // 下发基础路由
        }, // 通过 props 将 shared 传递给子应用
      }
    })
    this.registerMicroApps(apps);
    start();
    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted');
    });
  }
  /** 注册子项目 */
  registerMicroApps(apps: any): void {
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

  goto(item?: any) {
    if (!item) {
      this.current = '/'
      history.pushState(null, 'main', '/')
      return
    }
    history.pushState(null, item.activeRule, item.activeRule)
    this.current = item.activeRule
  }

  editStore() {
    actions.setGlobalState({ mainuser: this.value });
    this.current = '/sub-angular'
    this.router.navigate(['/sub-angular'])
  }

  edit() {
    actions.setGlobalState({ mainuser: this.value });
  }
}
