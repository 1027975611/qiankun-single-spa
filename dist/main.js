(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sangyou/Desktop/qiankun/qiankun-single-spa/main/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GFU9":
/*!**************************!*\
  !*** ./src/micro-app.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-configuration */ "Ohxj");

// import shared from "./shared";
//activeRule 不能和微应用的真实访问路径一样
//微应用的真实访问路径就是微应用的 entry
const microApps = [
    {
        name: 'sub-vue3',
        entry: _global_configuration__WEBPACK_IMPORTED_MODULE_0__["SUBAPP"].SUB_VUE,
        activeRule: '/sub-vue3'
    },
    {
        name: 'sub-react',
        entry: _global_configuration__WEBPACK_IMPORTED_MODULE_0__["SUBAPP"].SUB_REACT,
        activeRule: '/sub-react'
    },
    {
        name: 'sub-html',
        entry: _global_configuration__WEBPACK_IMPORTED_MODULE_0__["SUBAPP"].SUB_HTML,
        activeRule: '/sub-html'
    },
    {
        name: 'sub-angular',
        entry: _global_configuration__WEBPACK_IMPORTED_MODULE_0__["SUBAPP"].SUB_ANGULAR,
        activeRule: '/sub-angular'
    },
];
const apps = microApps.map(item => {
    return Object.assign(Object.assign({}, item), { container: '#subapp-viewport', props: {
            routerBase: item.activeRule,
        } });
});
/* harmony default export */ __webpack_exports__["default"] = (apps);


/***/ }),

/***/ "Ohxj":
/*!*************************************!*\
  !*** ./src/global-configuration.ts ***!
  \*************************************/
/*! exports provided: url, SUBAPP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBAPP", function() { return SUBAPP; });
// 采用 同一域名 下时  此时需要设置微应用构建时的 publicPath 和 history 模式的路由 base，然后才能打包放到对应的目录里。
// 每个 Angular 应用程序都应该在一个单独的 repo 中并单独部署
const SUBAPPALL = {
    LOCAL: {
        SUB_VUE: '//localhost:7402/subapp/sub-vue3/',
        SUB_REACT: '//localhost:7403/subapp/sub-react/',
        SUB_HTML: '//localhost:7404',
        SUB_ANGULAR: '//localhost:7401/',
    },
    TEST: {
        SUB_VUE: '//snapshot-finance.turboradio.cn/subapp/sub-vue3/',
        SUB_REACT: '//snapshot-finance.turboradio.cn/subapp/sub-react/',
        SUB_HTML: '//snapshot-finance.turboradio.cn/subapp/sub-html/',
        SUB_ANGULAR: '//snapshot-finance.turboradio.cn/subapp/sub-angular/',
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
};
let SUBAPP = {
    SUB_VUE: null,
    SUB_REACT: null,
    SUB_HTML: null,
    SUB_ANGULAR: null,
};
let url;
let protocolStr = document.location.protocol;
const domain = window.location.host;
var net = new RegExp('uniondrug.net');
var cn = new RegExp('uniondrug.cn');
var TEST = new RegExp('turboradio.cn');
if (net.test(domain)) {
    SUBAPP = SUBAPPALL.RC;
}
else if (cn.test(domain)) {
    SUBAPP = SUBAPPALL.PROD;
}
else if (TEST.test(domain)) {
    SUBAPP = SUBAPPALL.TEST;
}
else {
    SUBAPP = SUBAPPALL.LOCAL;
}



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var qiankun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qiankun */ "ArYl");
/* harmony import */ var src_micro_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/micro-app */ "GFU9");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared */ "hF6A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = function (a0) { return { "active": a0 }; };
function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.goto(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, item_r2.activeRule === ctx_r0.current));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.name, "");
} }
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.editStore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u767B\u5F55");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
// import { ActionsService } from 'src/api/actions.service';
class AppComponent {
    constructor(route, router, changeDetectorRef
    // public store:ActionsService
    ) {
        this.route = route;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.microApps = src_micro_app__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.current = document.location.pathname;
        this.state = null;
        this.value = '';
    }
    ngOnInit() {
        src_shared__WEBPACK_IMPORTED_MODULE_2__["default"].onGlobalStateChange((newState) => {
            this.state = newState;
            this.changeDetectorRef.markForCheck();
            this.changeDetectorRef.detectChanges();
        }, true);
        //  this.state =actions.onGlobalStateChange((newState:any) => this.state = newState,true)
    }
    ngAfterViewInit() {
        this.registerMicroApps(src_micro_app__WEBPACK_IMPORTED_MODULE_1__["default"]);
        Object(qiankun__WEBPACK_IMPORTED_MODULE_0__["start"])();
        Object(qiankun__WEBPACK_IMPORTED_MODULE_0__["runAfterFirstMounted"])(() => {
            console.log('[MainApp] first app mounted');
        });
    }
    /** 注册子项目 */
    registerMicroApps(apps) {
        Object(qiankun__WEBPACK_IMPORTED_MODULE_0__["registerMicroApps"])(apps, {
            beforeLoad: [
                app => {
                    console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
                    return Promise.resolve();
                },
            ],
            beforeMount: [
                app => {
                    console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
                    return Promise.resolve();
                },
            ],
            afterUnmount: [
                app => {
                    console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
                    return Promise.resolve();
                },
            ],
        });
    }
    goto(item) {
        if (!item) {
            this.current = '/';
            history.pushState(null, 'main', '/');
            return;
        }
        history.pushState(null, item.activeRule, item.activeRule);
        this.current = item.activeRule;
    }
    editStore() {
        src_shared__WEBPACK_IMPORTED_MODULE_2__["default"].setGlobalState({ mainuser: this.value });
        this.current = '/sub-angular';
        this.router.navigate(['/sub-angular']);
    }
    edit() {
        src_shared__WEBPACK_IMPORTED_MODULE_2__["default"].setGlobalState({ mainuser: this.value });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 9, consts: [[1, "layout-wrapper"], ["href", "https://github.com/1027975611/qiankun-single-spa#readme", "aria-label", "View source on GitHub", 1, "github-corner", 2, "display", "inline-block", "width", "80px", "height", "80px", "position", "absolute", "top", "0", "right", "0", "z-index", "1"], ["width", "80", "height", "80", "viewBox", "0 0 250 250", "aria-hidden", "true", 2, "fill", "#151513", "color", "#fff", "position", "absolute", "top", "0", "border", "0", "right", "0"], ["d", "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"], ["d", "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2", "fill", "currentColor", 1, "octo-arm", 2, "transform-origin", "130px 106px"], ["d", "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z", "fill", "currentColor", 1, "octo-body"], [1, "layout-header"], [1, "logo", 3, "ngClass", "click"], [1, "sub-apps"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "userinfo"], ["id", "subapp-viewport"], [3, "ngModel", "ngModelChange"], [2, "margin-bottom", "16px", 3, "click"], [4, "ngIf"], ["id", "subapp-container"], [3, "ngClass", "click"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_div_click_7_listener() { return ctx.goto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "QIANKUN-MAIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AppComponent_li_11_Template, 2, 4, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_16_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_17_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u4E3B\u5E94\u7528\u4FEE\u6539\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AppComponent_div_19_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "main", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.current === "/"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.microApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u4E3B\u5E94\u7528\u7684\u5168\u5C40state\uFF1A", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 5, ctx.state), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.current === "/");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0;\n}\n.github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n  animation: octocat-wave 560ms ease-in-out;\n}\n@keyframes octocat-wave {\n  0%,\n  100% {\n    transform: rotate(0);\n  }\n  20%,\n  60% {\n    transform: rotate(-25deg);\n  }\n  40%,\n  80% {\n    transform: rotate(10deg);\n  }\n}\n@media (max-width: 500px) {\n  .github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .github-corner[_ngcontent-%COMP%]   .octo-arm[_ngcontent-%COMP%] {\n    animation: octocat-wave 560ms ease-in-out;\n  }\n}\n.layout-wrapper[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  line-height: 50px;\n  position: relative;\n  margin-bottom: 32px;\n}\n.layout-wrapper[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0 50px;\n}\n.layout-wrapper[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   .sub-apps[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n}\n.layout-wrapper[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   .sub-apps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n  padding: 0 20px;\n  cursor: pointer;\n}\n.layout-wrapper[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   .userinfo[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 100px;\n  top: 0;\n}\n.active[_ngcontent-%COMP%] {\n  color: #42b983;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFDRSxvQkFBQTtFQUNBLFVBQUE7QUFFRjtBQUFBO0VBQStCLHlDQUFBO0FBRy9CO0FBSHdFO0VBQXdCOztJQUFRLG9CQUFBO0VBUXRHO0VBUjBIOztJQUFRLHlCQUFBO0VBWWxJO0VBWjJKOztJQUFRLHdCQUFBO0VBZ0JuSztBQUNGO0FBakI4TDtFQUF5QjtJQUErQixlQUFBO0VBcUJwUDtFQXJCbVE7SUFBeUIseUNBQUE7RUF3QjVSO0FBQ0Y7QUF4QkU7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBeUJOO0FBaENFO0VBU00sV0FBQTtFQUNBLGNBQUE7QUEwQlI7QUFwQ0U7RUFhTSxnQkFBQTtFQUNBLFNBQUE7QUEwQlI7QUF4Q0U7RUFnQlEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBMkJWO0FBOUNFO0VBd0JNLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUF5QlI7QUFwQkc7RUFDUyxjQUFBO0VBQ0EsMEJBQUE7QUFzQloiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG4uZ2l0aHViLWNvcm5lcjpob3ZlciAub2N0by1hcm17YW5pbWF0aW9uOm9jdG9jYXQtd2F2ZSA1NjBtcyBlYXNlLWluLW91dH1Aa2V5ZnJhbWVzIG9jdG9jYXQtd2F2ZXswJSwxMDAle3RyYW5zZm9ybTpyb3RhdGUoMCl9MjAlLDYwJXt0cmFuc2Zvcm06cm90YXRlKC0yNWRlZyl9NDAlLDgwJXt0cmFuc2Zvcm06cm90YXRlKDEwZGVnKX19QG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpey5naXRodWItY29ybmVyOmhvdmVyIC5vY3RvLWFybXthbmltYXRpb246bm9uZX0uZ2l0aHViLWNvcm5lciAub2N0by1hcm17YW5pbWF0aW9uOm9jdG9jYXQtd2F2ZSA1NjBtcyBlYXNlLWluLW91dH19XG4gIC5sYXlvdXQtd3JhcHBlcntcbiAgICAubGF5b3V0LWhlYWRlcntcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgLmxvZ28ge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luOiAwIDUwcHg7XG4gICAgICB9XG4gICAgICAuc3ViLWFwcHMge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpe1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnVzZXJpbmZve1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICAuYWN0aXZle1xuICAgICAgICAgICAgY29sb3I6ICM0MmI5ODM7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "hF6A":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qiankun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qiankun */ "ArYl");
// import store from "./store";
// class Shared {
//   /**
//    * 获取所有的数据
//    */
//   getState():any{
//     const state = store.getState();
//     return state || null;
//   }
//   /**
//    * 获取 Token
//    */
//   public getToken(): string {
//     const state = store.getState();
//     return state.token || "";
//   }
//   /**
//    * 设置 Token
//    */
//   public setToken(token: string): void {
//     // 将 token 的值记录在 store 中
//     store.dispatch({
//       type: "SET_TOKEN",
//       payload: token
//     });
//   }
// }
// const shared = new Shared();
// export default shared;

const initialState = { mainuser: null };
const actions = Object(qiankun__WEBPACK_IMPORTED_MODULE_0__["initGlobalState"])(initialState);
/* harmony default export */ __webpack_exports__["default"] = (actions);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var qiankun_ng_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qiankun-ng-common */ "b+JZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '**',
        component: qiankun_ng_common__WEBPACK_IMPORTED_MODULE_1__["EmptyComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map