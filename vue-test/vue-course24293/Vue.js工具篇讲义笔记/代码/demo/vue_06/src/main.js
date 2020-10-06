/*
 * @Date        : 2020-10-05 20:58:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 09:42:00
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\main.js
 * @Describe    : 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')