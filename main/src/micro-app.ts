import { SUBAPP } from './global-configuration'
import shared from "./shared";
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
    props: { shared }, // 通过 props 将 shared 传递给子应用
   }
})

export default apps
