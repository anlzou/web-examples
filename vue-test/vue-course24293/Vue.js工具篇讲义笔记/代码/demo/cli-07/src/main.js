/*
 * @Date        : 2020-10-06 10:09:17
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 10:15:51
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\cli-07\src\main.js
 * @Describe    : 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// ElementUI
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')