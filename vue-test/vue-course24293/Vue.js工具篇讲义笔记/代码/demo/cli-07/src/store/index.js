/*
 * @Date        : 2020-10-06 10:09:17
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 11:37:48
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\cli-07\src\store\index.js
 * @Describe    : 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //状态值
    count: 0,
    name: "anlzou",
    sex: "男",
    age: 20
  },
  mutations: { //修改状态
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    setAge(state, value) {
      state.age = value
    }
  },
  actions: { //接口异步请求，服务端请求数据
  },
  modules: {}
})