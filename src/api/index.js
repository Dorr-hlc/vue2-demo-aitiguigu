// 当前的接口是对api进行统一的管理
import requests from "./requests"
import mockRequests from "./mockAjax"
// 三级联动的接口
// /api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () =>
    // 发送请求
    requests({
        url: "/product/getBaseCategoryList",
        method: 'get'
    })

// 获取banner首页轮播
export const reqGetBannerList = () => mockRequests.get("/banner")

// 获取floor组件的数据

export const reqGetFloorList = () => mockRequests.get("/floor")