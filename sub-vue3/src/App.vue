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