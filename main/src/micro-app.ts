import store from './store'
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
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
   }
})

export default apps
