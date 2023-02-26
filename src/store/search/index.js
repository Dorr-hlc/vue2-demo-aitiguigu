/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-21 23:05:19
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-02-26 21:03:15
 * @RevisionHistory: 
 */
import { reqGetSearchInfo } from "@/api/index"
const state = {
    searchList: {}
}
const mutations = {
    REQGETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async reqGetSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("REQGETSEARCHLIST", result.data)
        }
    }
}
// 为了简化数据
const getters = {
    //当没有获取到数据的时候就让它为一个空数组
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}