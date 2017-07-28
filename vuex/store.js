import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    "searchCnt" : "talyor",
    "navShow" : true
}

const mutations = {
    UPDATE_SEARCH_CONT : function(state,cnt){
        state.searchCnt = cnt;
    },
    UPDATE_NAV_SHOW : function(state){
        state.navShow= !state.navShow;
    },
}

export default new Vuex.Store({
    state,
    mutations
})