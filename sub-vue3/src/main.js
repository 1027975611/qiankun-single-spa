// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import routes from './router'

// 不能直接挂载，需要切换的时候调用mount方法时再去挂载
// createApp(App).use(router).mount('#app')
let history;
let router;
let app;
function render(props = {}) {
    history = createWebHistory('/sub-vue3');
    router = createRouter({
        history,
        routes
    })
    app = createApp(App);
    let { container } = props
    app.use(router).mount(container ? container.querySelector('#sub-vue3') : '#sub-vue3')
}
// qiankun在渲染前提供了一个变量 window.__POWERED_BY_QIANKUN__
if (!window.__POWERED_BY_QIANKUN__) {// 独立运行
    render()
}

// 暴露协议
export async function bootstrap() {
    console.log('vue3 app bootstraped')
}
export async function mount(props) {
    console.log('vue3 app mount');
    render(props)
}
export async function unmount() {
    console.log('vue3 app unmount')
    history = null;
    app = null;
    router = null
}

