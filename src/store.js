import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    position: {},
    userName: ''
};

const mutations = {
    setPosition(state, val) {
        state.position = val;
    },
    setUserName(state, val){
        state.userName = val;
    }
}

const actions = {
    setPosition({ commit }, val){
        //异步获取后端数据

        //commit触发setPosition方法
        commit('setPosition', val);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});