const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/subapp/sub-vue3",   //打包后的访问路径
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
