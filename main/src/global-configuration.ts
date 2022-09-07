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
  // url = protocolStr + '//wx.uniondrug.net'
} else if (cn.test(domain)) {
  SUBAPP = SUBAPPALL.PROD
  // url = protocolStr + '//wx.uniondrug.cn'
} else {
  SUBAPP = SUBAPPALL.TEST
  // url = protocolStr + '//wx.turboradio.cn'
}

export  { url, SUBAPP }
