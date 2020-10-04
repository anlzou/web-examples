/*
 * @Date        : 2020-10-04 08:58:25
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 14:40:33
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\main.js
 * @Describe    : 
 */
//引入 Vue.js 框架
import Vue from 'vue'
//引入 App.vue 根组件
import App from './App.vue'
// 引入路由管理器
import router from './router'
// 引入Vuex，状态管理器
import store from './store'
// 引入elmUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
//去掉警告
Vue.config.productionTip = false
//根 Vue 实例(全局)
new Vue({
  router,
  store,
  /**
   * Vue2.x 写法，配合了 ES6 箭头函数
   * 参考 API 手册得知，作用是渲染一个视图组件
   * 这里注册了根组件 App
   */
  render: h => h(App)
  /**
   * $mount 方法，参考 API 手册得知是挂载函数
   * 相当于{el : '#app'}
   */
}).$mount('#app')