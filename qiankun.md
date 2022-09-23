# [qiankun](https://link.zhihu.com/?target=https%3A//github.com/umijs/qiankun)
[使用umi创建项目](https://umijs.org/)
qiankun 官方 demo 地址：https://github.com/umijs/qiankun
本文demo 地址： https://github.com/1027975611/qiankun-single-spa

## 一、创建及配置基座项目

`本地angular/cli 版本 11.2.19`

### **- 创建Angular 基座项目**

命令：`ng n main`。询问是否需要路由时，选择Yes

**- 添加依赖**

所需依赖：`qiankun qiankun-ng-common         `

命令：`npm i qiankun qiankun-ng-common -S`

1. ##### 注册微应用并启动：

   在`src`目录新增`global-configuration`  `micro-app.ts`文件

   global-configuration.ts 环境配置文件

   ```typescript
   type SUBAPP ={
     SUB_VUE: string |null,
     SUB_REACT: string | null,
     SUB_HTML: string | null,
     SUB_ANGULAR: string | null,
   }
   
   const SUBAPPALL = {
     TEST: {
       SUB_VUE: '//localhost:7402' ,
       SUB_REACT: '//localhost:7403',
       SUB_HTML: '//10.3.6.32:7404',
       SUB_ANGULAR: '//localhost:7401',
     },
     RC: {
       SUB_VUE: null,
       SUB_REACT: null,
       SUB_HTML: null,
       SUB_ANGULAR: null,
     },
     PROD: {
       SUB_VUE: null,
       SUB_REACT: null,
       SUB_HTML: null,
       SUB_ANGULAR: null,
     },
   }
   
   let SUBAPP: SUBAPP = {
     SUB_VUE: null,
     SUB_REACT: null,
     SUB_HTML: null,
     SUB_ANGULAR: null,
   }
   
   let url
   let protocolStr = document.location.protocol
   const domain = window.location.host
   var net = new RegExp('.uniondrug.net')
   var cn = new RegExp('.uniondrug.cn')
   if (net.test(domain)) {
     SUBAPP = SUBAPPALL.RC
    } else if (cn.test(domain)) {
     SUBAPP = SUBAPPALL.PROD
    } else {
     SUBAPP = SUBAPPALL.TEST
    }
   
   export  { url, SUBAPP }
   
   ```

   micro-app.ts 微应用配置文件

   ```typescript
   import { SUBAPP } from './global-configuration'
   const microApps= [
     {
       name: 'sub-vue3',
       entry: SUBAPP.SUB_VUE,
       activeRule: '/sub-vue3'
     },
     {
       name: 'sub-react',
       entry: SUBAPP.SUB_REACT,
       activeRule: '/sub-react'
     },
     {
       name: 'sub-html',
       entry: SUBAPP.SUB_HTML,
       activeRule: '/sub-html'
     },
     {
       name: 'sub-angular',
       entry: SUBAPP.SUB_ANGULAR,
       activeRule: '/sub-angular'
     },
   ]
   
   const apps= microApps.map(item => {
     return {
       ...item,
       container: '#subapp-viewport', // 子应用挂载的div
       // props: {}, // 通过props可以传递给子应用
      }
   })
   
   export default apps
   
   ```

   app.component.ts 启动微应用

   ```typescript
   import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
   import { start, runAfterFirstMounted, registerMicroApps } from 'qiankun'
   import microApps  from 'src/micro-app'
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
       private changeDetectorRef: ChangeDetectorRef
         ) { }
      microApps = microApps
      current:any = document.location.pathname
      state: any = null
      value:string = ''
      ngOnInit(): void {
   
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
   }
   
   ```

   app.component.html  配置主应用显示样式

   ```html
   <div class="layout-wrapper">
     <a style="display: inline-block;width: 80px;height: 80px;position: absolute;top: 0;right: 0;z-index: 1;"
       href="https://github.com/1027975611/qiankun-single-spa#readme" class="github-corner" aria-label="View source on GitHub">
       <svg width="80" height="80" viewBox="0 0 250 250"
         style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
         <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
         <path
           d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
           fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
         <path
           d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
           fill="currentColor" class="octo-body"></path>
       </svg>
     </a>
     <div class="layout-header">
       <div class="logo" (click)="goto()" [ngClass]="{'active': current==='/'}"><a >QIANKUN-MAIN</a></div>
       <ul class="sub-apps">
         <li *ngFor="let item of microApps" [ngClass]="{'active': item.activeRule === current}"  (click)="goto(item)">
           {{ item.name }}</li>
       </ul>
      </div>
     <div id="subapp-viewport"></div>
   </div>
   <div *ngIf="current==='/'">
     <router-outlet></router-outlet>
   </div>
   <!--子应用渲染容器-->
   <main id="subapp-container">
     <div id="subapp-viewport"></div>
   </main>
   
   
   ```

2. 在app-routing.module.ts中 配置默认路由，避免路由到子项目报错

   ```diff
   + import { EmptyComponent } from 'qiankun-ng-common';
   
   + const routes: Routes = [
   +  {
   +    path: '**',
   +    component: EmptyComponent
   +  }
   +];
   ```

   此时，基座项目应该是可以启动

### 二、创建及配置子项目

#### [single-spa-angular](https://single-spa.js.org/docs/ecosystem-angular)

#### 1 angular 子应用

**创建一个子项目**

命令：`ng n sub-angular`

**- 使用single-spa-angular schematics**

命令：`ng add single-spa-angular`。 

具体做了啥，参考：https://single-spa.js.org/docs/ecosystem-[angular](https://so.csdn.net/so/search?q=angular&spm=1001.2101.3001.7020)/#schematics

**- 安装依赖**

命令： `npm i @angular-builders/custom-webpack -D` 版本和angular版本保持一致

- Angular11 以上的版本使用 `single-spa-angular` 时 可直接使用

1. 在 `src` 目录新增 `public-path.js` 文件，内容为：

   ```js
   if (window.__POWERED_BY_QIANKUN__) {
     // eslint-disable-next-line no-undef
     __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
   }
   ```

2. 设置 `history` 模式路由的 `base`，`src/app/app-routing.module.ts` 文件：

   ```diff
   + import { APP_BASE_HREF } from '@angular/common';
   + import { EmptyRouteComponent } from './empty-route/empty-route.component';
   
   +  const routes: Routes = [
   +  {
   +   path: '**',
   +    component: EmptyRouteComponent
   +  }
   +];
   
   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
     // @ts-ignore
   +  providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/app-angular' : '/' }]
   })
   ```

3. 修改入口文件，`main.single-spa.ts` 文件。

   ```typescript
   import { enableProdMode, NgZone, ViewEncapsulation } from '@angular/core';
   
   import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
   import { Router, NavigationStart } from '@angular/router';
   
   import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
   
   
   import { AppModule } from './app/app.module';
   import { environment } from './environments/environment';
   import { singleSpaPropsSubject } from './single-spa/single-spa-props';
   
   
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
   
   // angular 作为微应用时
   const lifecycles = singleSpaAngular({
     bootstrapFunction: (singleSpaProps:any) => {
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
   
   ```

4. 打包配置  在根目录增加 `custom-webpack.config.js` ，内容为：

   ```typescript
   const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
   const { merge } = require('webpack-merge');
   const { name } = require('./package');
   
   
   module.exports = (config, options) => {
     const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
   
     const singleSpaConfig = {
       output: {
         library: `${name}-[name]`,
         libraryTarget: 'umd',
       },
       externals: {
         'zone.js': 'Zone',
       },
     };
     const mergedConfig = merge(singleSpaWebpackConfig, singleSpaConfig);
     return mergedConfig;
   };
   
   
   ```

5. 解决 `zone.js` 的问题

   在**父应用**引入 `zone.js`，需要在 `import qiankun` 之前引入。

   将微应用的 `src/polyfills.ts` 里面的引入 `zone.js` 代码删掉。

   ```diff
   - import 'zone.js/dist/zone';
   ```

   在微应用的 `src/index.html` 里面的 `<head>` 标签加上下面内容，微应用独立访问时使用。

   ```html
   <!-- 也可以使用其他的CDN的包 -->
   <script src="https://unpkg.com/zone.js" ignore></script>
   <!-- 也可以使用其他的CDN包/下载到本地引入 -->
   <script src="/assets/zone.js" ignore></script>
   
   
   ```


6. 修正 `ng build` 打包报错问题，修改 `tsconfig.json` 文件，参考[issues/431](https://github.com/umijs/qiankun/issues/431)

   ```diff
   - "target": "es2015",
   + "target": "es5",
   + "typeRoots": [
   +   "node_modules/@types"
   + ],
   ```

7. 为了防止主应用或其他微应用也为 `angular` 时，`<app-root></app-root>` 会冲突的问题，建议给`<app-root>` 加上一个唯一的 id，比如说当前应用名称。

   src/index.html ：

   ```html
   - <app-root></app-root>
   + <app1-root></app1-root>
   ```

   src/app/app.component.ts ：

   ```diff
   - selector: 'app-root',
   + selector: 'app1-root',
   ```

8. 修改静态资源的引用方式

   app.components.html

 ```html
  <img [src]="strawberry" alt="">
 
 ```

​      app.components.ts

 ```diff
+ import { assetUrl } from 'src/single-spa/asset-url';
....
+ strawberry = assetUrl('/img/strawberry.jpg')
 ```


**- 启动子项目 **     `npm run serve:single-spa:app1`



#### 2 搭建vue3子应用

##### 2.1、创建一个vue3应用

```js
vue create sub-vue 
```

##### 2.1.1 对router/index.js 文件进行改造

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export default routes

```

 2.1.2  在 `src` 目录新增 `public-path.js`： 对main.js文件进行改造   

```js
import './public-path';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import routes from './router'

// 不能直接挂载，需要切换的时候调用mount方法时再去挂载
 let history;
let router;
let app;
function render(props = {}) {
    // createWebHistory() // 没有 base，应用托管在域名 `https://example.com` 的根目录下。
    // createWebHistory('/folder/') // 给出的网址为 `https://example.com/folder/`
     history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/sub-vue3' : '/');
    router = createRouter({
        history,
        routes
    })
    app = createApp(App);
    let { container } = props
    app.use(store)
    app.use(router)
    .mount(container ? container.querySelector('#sub-vue3') : '#sub-vue3')

 }
// qiankun在渲染前提供了一个变量 window.__POWERED_BY_QIANKUN__
if (!window.__POWERED_BY_QIANKUN__) {// 独立运行
    // 独立运行时，也注册一个名为global的store module
    commonStore(store)
    // 模拟登录后，存储用户信息到global module
    const userInfo = { name: '我是独立运行时名字叫张三' } // 假设登录后取到的用户信息
    store.commit('global/setGlobalState', { user: userInfo })
    render()
}

// 暴露协议
export async function bootstrap() {
    console.log('vue3 app bootstraped')
}
export async function mount(props) {
    console.log(props);
    commonStore(store, props)
    render(props)
}
export async function unmount() {
    console.log('vue3 app unmount')
    app.unmount();
    app._container.innerHTML = '';
    app = null;
    router = null;
    history.destroy();
}


```

##### 2.2 配置微应用的打包工具

修改vue.config.js文件

```js
const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "//localhost:7402",   // 保证子应用静态资源都像是20000端口上发送的
  devServer: {
    port: 7402,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: { //需要获取打包的内容  systemjs=》 umd格式
    output: {
      libraryTarget: 'umd',
      library: `${name}-[name]`,
      chunkLoadingGlobal: `webpackJsonp_${name}`,// Vue2 为jsonpFunction
    }
  }
})

```

#### 3 搭建 react子应用

##### 3.1 创建 react 应用 当前版本为18.X 

```shell
npx create-react-app my-app
cd my-app
npm start

```

##### 3.2 切换到项目目录运行命令暴露相关配置文件

```shell
npm run eject
```

- 修改`webpack.config.js`，添加library和libraryTarget

  ```js
  // config/webpack.config.js
  // ......省略
  output:{
  	//...省略
  	globalObject: "window",
  	library:'sub-react',//命名自己决定（可随意命名）
  	libraryTarget:'umd'
  	//...省略
  }
  // ......省略
  
  ```

- 修改`webpackDevServer.config.js`设置允许跨域

  ```js
  // config/webpackDevServer.config.js
  // ......省略
  module.exports = function(proxy, allowedHost){
  	return {
  		headers:{
  			"Access-Control-Allow-Origin":"*"
  		}
  		//...省略
  	}
  }
  // ......省略
  ```

##### 3.3在 `src` 目录新增 `public-path.js`：

```js
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```



##### 3.4修改`src/index.js`代码

```js
import './public-path'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let root = null // 记录当前创建的 应用
function render(props) {
  const { container } = props;
   root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  reportWebVitals();
}


if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('基座下发的能力：', props);

  // 可通过 props.getGlobalState() 获取基座下发的数据

  // props.setGlobalState({user: {name: ''}}) 改变全局的数据

  // props.onGlobalStateChange 监听全局数据的变化
  render(props);
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  root.unmount()
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}




```



#### 4 非 webpack 构建的微应用

例如 `jQuery` 项目、`jsp` 项目，都可以按照这个处理。

接入之前请确保你的项目里的图片、音视频等资源能正常加载，如果这些资源的地址都是完整路径（例如 `https://qiankun.umijs.org/logo.png`），则没问题。如果都是相对路径，需要先将这些资源上传到服务器，使用完整路径。

接入非常简单，只需要额外声明一个 `script`，用于 `export` 相对应的 `lifecycles`。例如:

使用 `cross-env`    `http-server`

#### npm-run-all 简化script配置

参考文档： https://juejin.cn/post/6854573216363446286





### 二 [组件通讯](https://qiankun.umijs.org/zh/api#initglobalstatestate) 

- 用法

  定义全局状态，并返回通信方法，建议在主应用使用，微应用通过 props 获取通信方法。

- 返回

  - MicroAppStateActions
    - onGlobalStateChange: `(callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void`， 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
    - setGlobalState: `(state: Record<string, any>) => boolean`， 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
    - offGlobalStateChange: `() => boolean`，移除当前应用的状态监听，微应用 umount 时会默认调用



#### 1主应用的工作

##### 1.1: 首先，我们在主应用中注册一个 `MicroAppStateActions` 实例并导出，代码实现如下

```typescript
// main/src/shared/index.ts
import { initGlobalState, MicroAppStateActions } from "qiankun";

//子应用只能修改主应用已有的一级属性数据 - (初始类型时需注意)  主应用可以随意修改
const initialState = {};
const actions: MicroAppStateActions = initGlobalState(initialState);

export default actions;

```

##### 1.2: 在需要传输数据的地方发送即可 `setGlobalState `  

- 按一级属性设置全局状态，微应用中只能修改已存在的`一级属性`

```typescript
send(){
  actions.setGlobalState({'id': '123'});
}
```

#### 2子应用的工作

1. ###### 在 `src` 目录文件下创建 `shared/index.ts`  文件

   ```typescript
   function emptyAction(...args:any) {
     // 警告：提示当前使用的是空 Action
     console.log("Current execute action is empty! color:#00B095");
   }
   
   class Actions {
     // 默认值为空 Action
     actions = {
       onGlobalStateChange: emptyAction,
       setGlobalState: emptyAction
     };
   
     /**
      * 设置 actions
      */
     setActions(actions: any) {
       this.actions = actions;
     }
   
     /**
      * 映射
      */
     onGlobalStateChange(...args: any) {
       return this.actions.onGlobalStateChange(...args);
     }
   
     /**
      * 映射
      */
     setGlobalState(...args: any) {
       return this.actions.setGlobalState(...args);
     }
   }
   
   const actions = new Actions();
   export default actions;
   ```

2. ###### `angular`中直接使用

       1. 在 `main.single-spa.ts` 文件中注入实例

     ```diff
   + import actions from './shared'
   
   // ......省略
   
   const lifecycles = singleSpaAngular({
     bootstrapFunction: (singleSpaProps:any) => {
   +    // 注入 actions 实例
   +    if (singleSpaProps) {
   +      // 注入 actions 实例
   +      actions.setActions(singleSpaProps);
   +    }
   // ......省略
     ```

   2. 在需要使用数据的地方引入即可

      ```typescript
      import actions from 'src/shared'
      // ......省略
      
      //获取数据
       actions.onGlobalStateChange((newState: any,preState:any) => {
         //newState 当前最新的数据   
         //preState 上一次的数据
            this.state = newState
            this.changeDetectorRef.markForCheck();
            this.changeDetectorRef.detectChanges();
       },true)
      
      //修改数据 state 必须为主数据中已有的属性
       actions.setGlobalState(state);
      
      
      
      ```

3. 子应用中配合状态管理工具使用 例如：`vuex` 

   1. 在 `src/store` 创建 `global-register.js` 文件

      ```js
      /**
       * 
       * @param {vuex实例} store 
       * @param {qiankun下发的props} props 
       */
      
      export default function registerGlobalModule(store, props = {}) {
      
        if (!store || !store.hasModule) {
          return;
        }
        // 获取初始化的state
        let initState = props.onGlobalStateChange && props.onGlobalStateChange((newState) => newState, true)||{
          mainuser: null
        };
      
         // 将父应用的数据存储到子应用中，命名空间固定为global
        if (!store.hasModule('global')) {
          const globalModule = {
            namespaced: true,
            state: initState,
            actions: {
              // 子应用改变state并通知父应用
              setGlobalState({ commit }, payload) {
                commit('setGlobalState', payload);
                commit('emitGlobalState', payload);
              },
              // 初始化，只用于mount时同步父应用的数据
              initGlobalState({ commit }, payload) {
                commit('setGlobalState', payload);
              },
            },
            mutations: {
              setGlobalState(state, payload) {
                // eslint-disable-next-line
                state = Object.assign(state, payload);
                
              },
              // 通知父应用
              emitGlobalState(state) {
                if (props.setGlobalState) {
                  props.setGlobalState(state);
                }
              },
            },
          };
          // 模块动态注册
          store.registerModule('global', globalModule);
        } else {
          // 每次mount时，都同步一次父应用数据
          store.dispatch('global/initGlobalState', initState);
        }
      };
      ```

      

   2. 在Vue3 下使用 vuex  中的 方法 需进一步封装   `src/store` 创建 `useStore.js` 文件

      ```js
      import { computed } from 'vue'
      import { mapState, mapGetters, mapMutations, mapActions, useStore } from 'vuex'
      /**
       *
       * @param mapName  传入mapState, mapGetters, mapActions, mapMutations 的名称
       * @param mapperFn  传入的map辅助函数，mapState, mapGetters, mapActions, mapMutations
       * @param mapper    方法或者属性的名字，actions或者mutations或者getter的函数名，state的属性名字
       * @param module    开启命名空间后的模块名
       * @resultFn {{}}    返回数组，数组内容为fn函数，fn函数为每个属性所对应的map辅助函数
       */
      const hooks = (mapName,mapperFn, mapper, module) => {
          const store = useStore();  // 引入vuex中的useStore函数
           // 获取到对应的对象的functions: {name: function, age: function}
          let mapData = {};
          // 对数据进行转换
          let resultFn = {};
          if (module) {  // 判断是否存在命名空间，如果存在则绑定
              mapData = mapperFn(module, mapper);
          } else {
              mapData = mapperFn(mapper);
          }
          Object.keys(mapData).forEach((fnKey) => {
              const fn = mapData[fnKey].bind({ $store: store })
              if ((mapName && mapName === 'mapMutations') || mapName === 'mapActions') {
                  resultFn = fn
              } else {
                  resultFn[fnKey] = computed(fn)
              }
          })
          return resultFn
      };
      
      /**
       * 封装useState函数
       * @param module   命名空间，名称
       * @param mapper  数组， state中定义的变量名称
       */
      export const useState = (mapper, module) => {
          return hooks('mapState',mapState, mapper, module)
      };
      
      /**
       * 封装useGetters函数
       * @param module  命名空间，
       * @param mapper 数组，即getters中的返回值名称
       */
      export const useGetters = (mapper, module) => {
          return hooks('mapGetters',mapGetters, mapper, module)
      };
      
      /**
       * 封装mapMutations函数
       * @param mapper  数组，mutations中函数的名称
       * @param module  命名空间，模块名称
       */
      export const useMutations = (mapper, module) => {
          return hooks('mapMutations',mapMutations, mapper, module);
      };
      
      /**
       * 封装mapActions函数
       * @param mapper  数组，actions中函数的名称
       * @param module  命名空间，模块名称
       */
      export const  useActions = (mapper, module) => {
          return hooks('mapActions',mapActions, mapper, module);
      };
      
      ```

   3. 在 `main.js` 文件中注册 store 

      ```js
      import store from './store'
      import commonStore from './store/global-register'
      //...省略
      
      
      function render(props = {}) {
          // 当传入的 shared 为空时，使用子应用自身的 shared
          // 当传入的 shared 不为空时，主应用传入的 shared 将会重载子应用的 shared
          // const { shared = SharedModule.getShared() } = props;
          // SharedModule.overloadShared(shared);
          // createWebHistory() // 没有 base，应用托管在域名 `https://example.com` 的根目录下。
          // createWebHistory('/folder/') // 给出的网址为 `https://example.com/folder/`
           history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/sub-vue3' : '/');
          router = createRouter({
              history,
              routes
          })
          app = createApp(App);
          let { container } = props
          //注册 vuex
          app.use(store)
          app.use(router)
          .mount(container ? container.querySelector('#sub-vue3') : '#sub-vue3')
      
       }
      
      if (!window.__POWERED_BY_QIANKUN__) {// 独立运行
          // 独立运行时，也注册一个名为global的store module
          commonStore(store)
          // 模拟登录后，存储用户信息到global module
          const userInfo = { name: '法外狂徒张三' } // 假设登录后取到的用户信息
          store.commit('global/setGlobalState', { user: userInfo })
          render()
      }
      
      //作为微应用运行时
      export async function mount(props) {
          // 注册 global 模块并传入props
          commonStore(store, props)
          render(props)
      }
      ```

      

   4. 在需要使用的地方 直接读取 vuex

      ```vue
      <template>
          <div id="app">
              <div id="nav">
                  <router-link to="/">Home</router-link> |
                  <router-link to="/about">About</router-link>
              </div>
              <div>
                  <p>
                      当前处于<code>{{ isInQiankun ? 'qiankun' : '独立运行' }}</code>
                      >环境
                  </p>
                  <p>
                      vuex的`global module`的user state：
                      <code>{{ JSON.stringify(storeState.mainuser.value) }}</code>
                  </p>
              </div>
              <div class="btns">
                  <template v-if="isInQiankun">
                      <button @click="gotoSubReact">
                          从当前子应用内跳转到`sub-react`子应用
                      </button>
                      <button @click="openSubVue">独立打开sub-vue子应用</button>
                  </template>
                  <button @click="changeUsername">改变全局的用户名称</button>
              </div>
              <router-view />
          </div>
      </template>
      
      <script setup>
      import { computed, reactive, ref } from 'vue'
      import { useState, useActions } from './store/useStore'
      /**
       * 读取 vuex中 global 模块的 mainuser 数据
       */
      const storeState = useState(['mainuser'], 'global')
      /**
       * 是否是作为微应用启动
       */
      const isInQiankun = computed(() => window.__POWERED_BY_QIANKUN__)
      /**
       * 打开窗口 独立运行
       */
      const openSubVue = () => {
          if (!isInQiankun) {
              alert('当前已经是单独运行的子应用')
              return
          }
          // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是qiankun注入的子应用对应的地址，谨慎使用，生产环境建议将跳转地址维护在环境变量中
          window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
      }
      /**
       * 结构出  setGlobalState 函数
       */
      const setGlobalState = useActions(['setGlobalState'], 'global')
      /**
       *修改 主数据  mainuser  中的 数据
       */
      const changeUsername = () => {
          setGlobalState({
              mainuser: { name: '李四' + Math.round(Math.random() * 100) },
          })
      }
      
      /**
       * 跳转到 react 微应用
       */
      const gotoSubReact = () => {
          history.pushState(null, 'sub-react', '/sub-react')
      }
      </script>
      
      <style lang="less">
      #app {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
      }
      
      #nav {
          padding: 30px;
      }
      
      #nav a {
          font-weight: bold;
          color: #2c3e50;
      }
      
      #nav a.router-link-exact-active {
          color: #42b983;
      }
      
      .btns {
          margin: 100px;
      }
      .btns button {
          margin: 0 10px;
      }
      </style>
      ```

      

## 三 打包部署 

### [场景 1：主应用和微应用部署到同一个服务器（同一个 IP 和端口）](https://qiankun.umijs.org/zh/cookbook#%E5%9C%BA%E6%99%AF-1%E4%B8%BB%E5%BA%94%E7%94%A8%E5%92%8C%E5%BE%AE%E5%BA%94%E7%94%A8%E9%83%A8%E7%BD%B2%E5%88%B0%E5%90%8C%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%90%8C%E4%B8%80%E4%B8%AA-ip-%E5%92%8C%E7%AB%AF%E5%8F%A3)

### [场景 2：主应用和微应用部署在不同的服务器，使用 Nginx 代理访问](https://qiankun.umijs.org/zh/cookbook#%E5%9C%BA%E6%99%AF-2%E4%B8%BB%E5%BA%94%E7%94%A8%E5%92%8C%E5%BE%AE%E5%BA%94%E7%94%A8%E9%83%A8%E7%BD%B2%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BD%BF%E7%94%A8-nginx-%E4%BB%A3%E7%90%86%E8%AE%BF%E9%97%AE)



## 四子应用独立仓库后聚合管 理

##### 单纯地将所有子仓库放到聚合目录下并`.gitignore`掉。
请参考 [test](https://github.com/1027975611/qiankun-single-spa/tree/test) 分支
聚合库使用 `npm-run-all`一键install和一键启动整个项目，我们参考qiankun的examples的使用方法

        1.  聚合库安装`npmi npm-run-all -D`
        2.  聚合库的package.json 增加命令


```json
"scripts": {
        "clone": "npm-run-all --serial clone:*",
        "clone:sub-vue": "cd subapp && git clone https://xxx//sub-vue3.git",
        "clone:sub-react": "cd subapp && git clone https://xxx//sub-react.git",
        "clone:sub-angular": "cd subapp && git clone https://xxx//sub-angular.git",
        "clone:sub-html": "cd subapp && git clone https://xxx//sub-html.git",
        "install": "npm-run-all --serial install:*",
        "install:main": "cd main && npm i",
        "install:sub-vue": "cd subapp &&cd sub-vue3 && npm i",
        "install:sub-react": "cd subapp &&cd sub-react && npm i",
        "install:sub-angular": "cd subapp &&cd sub-angular && npm i",
        "install:sub-html": "cd subapp &&cd sub-html && npm i",
        "start": "npm-run-all --parallel start:*",
        "start:sub-react": "cd subapp &&cd sub-react && npm start",
        "start:sub-vue": "cd subapp &&cd sub-vue3 && npm start",
        "start:main": "cd main && npm start",
        "start:sub-angular": "cd subapp &&cd sub-angular && npm run start:single-spa:sub-angular",
        "start:sub-html": "cd subapp &&cd sub-html && npm start",
        "build": "npm-run-all build:* && bash ./scripts/bundle.sh",
        "build:sub-angular": "cd subapp &&cd sub-angular && npm run build:single-spa:sub-angular",
        "build:sub-react": "cd subapp &&cd sub-react && npm run build",
        "build:sub-vue": "cd subapp &&cd sub-vue3 && npm run build",
        "build:sub-html": "cd subapp &&cd sub-html && npm run build",
        "build:main": "cd main && npm run build",
        "checkout": "npm-run-all --serial checkout:*",
        "checkout:sub-vue3": "cd subapp && cd sub-vue3 && git checkout master",
        "checkout:sub-react": "cd subapp && cd sub-react && git checkout master",
        "checkout:sub-angular": "cd subapp && cd sub-angular && git checkout master",
        "checkout:sub-html": "cd subapp && cd sub-html && git checkout master",
        "pull": "npm-run-all --parallel pull:*",
        "pull:main": "git pull",
        "pull:sub-vue3": "cd subapp && cd sub-vue3 && git pull",
        "pull:sub-react": "cd subapp && cd sub-react && git pull",
        "pull:sub-angular": "cd subapp && cd sub-angular && git pull",
        "pull:sub-html": "cd subapp && cd sub-html && git pull"
    },
```



## 五其他问题

##### [qiankun上线稳定，问题解决汇总](https://www.shouxicto.com/article/4005.html)

[1：`boax-sizing` 样式污染 。2：`子应用播放器报错`,](https://juejin.cn/post/7091594061328580645)



[本文参考文档](https://cloud.tencent.com/developer/article/1880214)






