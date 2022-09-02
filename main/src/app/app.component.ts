import { Component, OnInit } from '@angular/core';
import { setDefaultMountApp, start, runAfterFirstMounted, registerMicroApps } from 'qiankun'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
   ngOnInit(): void {
    this.registerMicroApps();

    // setDefaultMountApp('/sub-angular');

    start();

    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted');
    });
  }

  /** 注册子项目 */
  registerMicroApps(): void {
    registerMicroApps(
      [
        {
          name: 'sub-angular',
          entry: '//localhost:7401',
          container: '#subapp-viewport',
          activeRule: '/sub-angular',
        },
        {
          name: 'sub-vue3',
          entry: '//localhost:7402',
          container: '#subapp-viewport',
          activeRule: '/sub-vue3',
        },
        {
          name: 'sub-react',
          entry: '//localhost:7403',
          container: '#subapp-viewport',
          activeRule: '/sub-react',
        },
        {
          name: 'sub-html',
          entry: '//10.3.6.32:7799',
          container: '#subapp-viewport',
          activeRule: '/sub-html',
        },
      ],
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
}
