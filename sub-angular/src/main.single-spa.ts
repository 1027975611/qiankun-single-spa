import './public-path';
import { enableProdMode, NgZone, ViewEncapsulation } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

import actions from './shared'

if (environment.production) {
  enableProdMode();
}
// angular 应用单独运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  const render = () => {
    return platformBrowserDynamic().bootstrapModule(AppModule, {
      defaultEncapsulation: ViewEncapsulation.Emulated,
    }).then((res) => {
      if ((<any>window).appBootstrap) {
        (<any>window).appBootstrap();
      }
      return res;
    });
  };

  render();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps:any) => {
    // // 当传入的 shared 为空时，使用子应用自身的 shared
    // // 当传入的 shared 不为空时，主应用传入的 shared 将会重载子应用的 shared
    // const { shared = SharedModule.getShared() } = singleSpaProps;
    // SharedModule.overloadShared(shared);
    // 注入 actions 实例
    if (singleSpaProps) {
      // 注入 actions 实例
      actions.setActions(singleSpaProps);
    }

    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
 });


export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
