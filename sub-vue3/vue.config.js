const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "//localhost:7402",   // 保证子应用静态资源都像是20000端口上发送的
  devServer: {
    port: 7402,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: { //需要获取打包的内容  systemjs=》 umd格式
    output: {
      libraryTarget: 'umd',
      library: `${name}-[name]`,
      chunkLoadingGlobal: `webpackJsonp_${name}`,// Vue2 为jsonpFunction
    }
  }
})
