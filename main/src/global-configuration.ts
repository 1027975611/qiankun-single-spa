type SUBAPP ={
  SUB_VUE: string |null,
  SUB_REACT: string | null,
  SUB_HTML: string | null,
  SUB_ANGULAR: string | null,
}
// 采用 同一域名 下时  此时需要设置微应用构建时的 publicPath 和 history 模式的路由 base，然后才能打包放到对应的目录里。
const SUBAPPALL = {
  LOCAL: {
    SUB_VUE: '//localhost:7402/subapp/sub-vue3/' ,
    SUB_REACT: '//localhost:7403/subapp/sub-react/',
    SUB_HTML: '//localhost:7404',
    SUB_ANGULAR: '//localhost:7401/',
  },
  TEST: {
    SUB_VUE: '//localhost:8080/subapp/sub-vue3/' ,
    SUB_REACT: '//localhost:8080/subapp/sub-react/',
    SUB_HTML: '//localhost:8080/subapp/sub-html/',
    SUB_ANGULAR: '//localhost:8080/subapp/sub-angular/',
  },
  RC: {
    SUB_VUE: '//localhost:8081/subapp/sub-vue3/',
    SUB_REACT: '//localhost:8082/subapp/sub-react/',
    SUB_HTML: '//localhost:8083/subapp/sub-html/',
    SUB_ANGULAR: '//localhost:8084/subapp/sub-angular/',
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
var net = new RegExp(':8081')
var cn = new RegExp('.cn')
var TEST = new RegExp(':8080')
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
