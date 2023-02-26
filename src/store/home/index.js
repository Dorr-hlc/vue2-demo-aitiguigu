/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-26 08:54:51
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-02-26 09:37:42
 * @RevisionHistory: 
 */
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"

const state = {
    // 根据返回的初始值
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
    // 通过api发送请求
    async categoryList({ commit }) {
        const result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async GetBannerList({ commit }) {
        const result = await reqGetBannerList()
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    async GetFloorList({ commit }) {
        const result = await reqGetFloorList()
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}