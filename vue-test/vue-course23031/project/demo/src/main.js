/*
 * @Date        : 2020-10-21 08:32:01
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 08:33:22
 * @FilePath    : \vue-course23031\project\demo\src\main.js
 * @Describe    : 
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
