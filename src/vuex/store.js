import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

// 应用初始状态
const state = {
    mineInfo: {
    	name: '你怕是还没登录',
    	role: '管理员',
    	time: new Date().getTime() / 1000
    },
    token: ''
};

// 定义所需的 mutations
const mutations = {
    MINEINFO(state, mineInfo) {
        state.mineInfo = mineInfo;
    },
    TOKEN(state,token){
    	state.token = token
    }
};

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})