import Vue from 'vue'
import Vuex from 'vuex'
import list from "./modules/list"
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

export default new Vuex.Store({
  //严格模式
  strict : false,

  state,
  getters,
  mutations,
  actions,
  modules: {
    list
  }
})
