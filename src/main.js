/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-19 21:44:13
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-02-23 21:46:36
 * @RevisionHistory: 
 */
import Vue from 'vue'
import App from './App.vue'
// 三级联动组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
Vue.config.productionTip = false
// 引入mock假数据
import '@/mock/mockServer'
// 引入Vuex仓库
import store from '@/store'
// 引入路由
import router from "@/router"
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库：组件实例的就多一个$store属性
  store
}).$mount('#app')