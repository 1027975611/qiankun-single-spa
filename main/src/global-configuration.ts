type SUBAPP ={
  SUB_VUE: string |null,
  SUB_REACT: string | null,
  SUB_HTML: string | null,
  SUB_ANGULAR: string | null,
}
// 采用 同一域名 下时  此时需要设置微应用构建时的 publicPath 和 history 模式的路由 base，然后才能打包放到对应的目录里。
// 每个 Angular 应用程序都应该在一个单独的 repo 中并单独部署
const SUBAPPALL = {
  LOCAL: {
    SUB_VUE: '//localhost:7402/subapp/sub-vue3/' ,
    SUB_REACT: '//localhost:7403/subapp/sub-react/',
    SUB_HTML: '//localhost:7404',
    SUB_ANGULAR: '//localhost:7401/',
  },
  TEST: {
    SUB_VUE: '//qiankun.com/subapp/sub-vue3/' ,
    SUB_REACT: '//qiankun.com/subapp/sub-react/',
    SUB_HTML: '//qiankun.com/subapp/sub-html/',
    SUB_ANGULAR: '//qiankun.angular.com/',
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
var net = new RegExp('.net')
var cn = new RegExp('.cn')
var TEST = new RegExp('.test')
if (net.test(domain)) {
  SUBAPP = SUBAPPALL.RC
 } else if (cn.test(domain)) {
  SUBAPP = SUBAPPALL.PROD
 } else if (TEST.test(domain)) {
  SUBAPP = SUBAPPALL.TEST
 }else {
  SUBAPP = SUBAPPALL.LOCAL
}

export  { url, SUBAPP }
