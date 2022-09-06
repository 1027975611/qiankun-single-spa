<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <div>
            <p>
                当前处于<code>{{ isInQiankun ? 'qiankun' : '独立运行' }}</code
                >环境
            </p>
            <p>
                vuex的`global module`的user state：<code>
                    {{ JSON.stringify(storeState.user.value) }}</code
                >
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
import { computed } from 'vue'
import { useState, useActions } from './store/useStore'
import { useStore } from 'vuex'

const store = useStore()
const storeState = useState(['user'], 'global')
const isInQiankun = computed(() => window.__POWERED_BY_QIANKUN__)
const gotoSubReact = () => {
    history.pushState(null, 'sub-react', '/sub-react')
}

const openSubVue = () => {
    if (!isInQiankun) {
        alert('当前已经是单独运行的子应用')
        return
    }
    // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是qiankun注入的子应用对应的地址，谨慎使用，生产环境建议将跳转地址维护在环境变量中
    window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
}

const setGlobalState = useActions(['setGlobalState'], 'global')
const changeUsername = () => {
    // 也可通过 store.commit('global/setGlobalState', { user: '李四' }) 进行操作
    // store.commit('global/setGlobalState', {
    //     user: { name: '李四' + Math.round(Math.random() * 100) },
    // })
    setGlobalState({
        user: { name: '李四' + Math.round(Math.random() * 100) },
    })
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