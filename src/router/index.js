/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-19 22:22:31
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-02-25 17:44:24
 * @RevisionHistory: 
 */
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 引入路由
// import Home from "@/pages/Home/index"
// import Login from "@/pages/Login/index"
// import Search from "@/pages/Search/index"
// import Register from "@/pages/Register/index"
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component:()=>import("@/pages/Home/index"),
            meta: {
                footerShow: true,
                typeNavShow:true
            },
        },
        {
            path: "/login",
            component:()=>import("@/pages/Login/index"),
        },
        {
            name: "search",
            path: "/search/:keyword?",
            component:()=>import("@/pages/Search/index"),
            meta: {
                footerShow: true,
                typeNavShow:false
            },
            // 路由组件传参
            // props: true
            // 对象写法
            // props: {
            //     a: 1,
            //     b: 2
            // }
            // 函数写法
            props: (route) => {
                return {
                    searchtxt: route.params.searchtxt,
                    k: route.query.k
                }
            }

        },
        {
            path: "/register",
            component:()=>import("@/pages/Register/index"),
        },
        // 重定向
        { path: "*", redirect: '/' },
    ],


})

export default router