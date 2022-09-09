# qiankun-single-spa

qiankun 实战 demo，父应用 Angular，子应用使用 `angular` `react`, `vue` 和 `原生HTML`。


## 开始
安装根目录工程依赖
```
npm i
```
一键安装所有主子应用的依赖
```
npm run install
```

一键启动所有所有应用
```
npm start
```

通过 [http://localhost:7400/](http://localhost:7400/) 访问主应用。
也可单独访问独立的子应用 子应用端口号: 
angular [http://localhost:7401/](http://localhost:7401/)
vue [http://localhost:7402/](http://localhost:7402/)
react [http://localhost:7403/](http://localhost:7403/)
html [http://localhost:7404/](http://localhost:7404/)

## 发布
一键构建并打包所有主子应用
```
npm run build
```

