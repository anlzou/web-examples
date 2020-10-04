/*
 * @Date        : 2020-09-24 19:26:17
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-24 19:37:59
 * @FilePath    : \demo\cli-05\src\store\index.js
 * @Describe    : 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    count(state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
})