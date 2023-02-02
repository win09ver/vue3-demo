const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //lint の有効化制御
  lintOnSave: true,
  parallel: false,
  publicPath: "./"
})
