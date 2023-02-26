import { reqCategoryList, reqGetBannerList } from "@/api"

const state = {
    // 根据返回的初始值
    categoryList: [],
    bannerList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
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