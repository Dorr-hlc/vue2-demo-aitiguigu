/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-21 22:05:58
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-02-25 20:40:24
 * @RevisionHistory: 
 */
// 对axios进行封装
import axios from "axios";

// 引入进度条
import nProgress from "nprogress";
// 引入进度条的样式
import "nprogress/nprogress.css";
// start方法代表开始，done代表结束
// 1.利用axios对象的方法create，去创建一个axios实例
// request就是axios 
const requests = axios.create({
    //  配置对象
    // 基础路径
    baseURL: "/api",
    // 代表请求的超时时间5s
    timeout: 5000,
});
// 请求拦截器，发送请求之前，请求拦截器可以检测到，在请求发出之前需要做的一些事情
requests.interceptors.request.use((config) => {
    // config是一个配置对象，对象有一个属性很重要，header请求头
    nProgress.start()
    return config
})
// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数
    nProgress.done()
    return res.data
}, (err) => {
    // 失败的回调函数
    return Promise.reject(new Error("faile"))
})




// 对外暴露
export default requests
