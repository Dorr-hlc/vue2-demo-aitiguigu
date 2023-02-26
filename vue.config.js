/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-19 21:44:13
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-02-23 21:40:53
 * @RevisionHistory: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host:  process.env.Host || "0.0.0.0",
    port: 8080,
    hot: true,//热更新
    open: true,//build自动打开浏览器
    compress:true,
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: { '^/api': '' },
      },
    },

  },
  lintOnSave: false, //关闭语法检查
})
