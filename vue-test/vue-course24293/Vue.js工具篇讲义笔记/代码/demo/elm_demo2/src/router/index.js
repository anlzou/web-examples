/*
 * @Date        : 2020-10-04 08:58:25
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 17:11:41
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\router\index.js
 * @Describe    : 
 */
//引入 Vue.js
import Vue from 'vue'
//引入 vue-router.js
import VueRouter from 'vue-router'
//引入 Home 组件, 勤加载
import Home from '../views/Home.vue'
//可以参考 API 的解释，参数是一个插件，路由就是一个插件
//这句话的意思是：初始化这个插件以便使用
Vue.use(VueRouter)
//这个常量用于设置每个组件的信息，然后交给路由插件注册
const routes = [{
    path: '/', //链接地址
    name: 'Home', //别名
    component: Home //加载的组件
  },
  {
    path: '/about/:id',
    name: 'About',
    children: [{
        path: "/profile",
        component: () => import('../views/about/AboutProfile.vue')
      },
      {
        path: "/posts",
        component: () => import('../views/about/AboutPosts.vue')
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //另一种组件加载模式，路由懒加载
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page3',
    name: 'Page3',
    component: () => import('../views/Page3.vue')
  }
]
//实例化路由组件
const router = new VueRouter({
  mode: 'history', //默认 mode : 'hash'; 在 hash 模式下，链接地址前会有#号，改成 history 模式则没有这个#号
  routes
})
//导出路由
export default router