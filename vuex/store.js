import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    "searchCnt" : "talyor"
}

const mutations = {
    UPDATE_SEARCH_CONT : function(state,cnt){
        state.searchCnt = cnt;
    },
}

export default new Vuex.Store({
    state,
    mutations
})