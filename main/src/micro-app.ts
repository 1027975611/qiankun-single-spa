import { SUBAPP } from './global-configuration'

// import shared from "./shared";
// let loader = (loading: boolean) =>  {
//   new AngularRenderService().evnetBus.next(loading)
// }

//activeRule 不能和微应用的真实访问路径一样
//微应用的真实访问路径就是微应用的 entry

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
export default microApps
