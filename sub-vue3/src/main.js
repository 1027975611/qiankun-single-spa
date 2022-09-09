import './public-path';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import routes from './router'
// import SharedModule from "@/shared";
import store from './store'
import commonStore from './store/global-register'

// 不能直接挂载，需要切换的时候调用mount方法时再去挂载
 let history;
let router;
let app;
function render(props = {}) {
    const { container, routerBase } = props
    // 当传入的 shared 为空时，使用子应用自身的 shared
    // 当传入的 shared 不为空时，主应用传入的 shared 将会重载子应用的 shared
    // const { shared = SharedModule.getShared() } = props;
    // SharedModule.overloadShared(shared);
    // createWebHistory() // 没有 base，应用托管在域名 `https://example.com` 的根目录下。
    // createWebHistory('/folder/') // 给出的网址为 `https://example.com/folder/`
    //BASE_URL  vue.config.js 中的 publicPath
    history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL);
    router = createRouter({
        history,
        routes
    })
    app = createApp(App);
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

