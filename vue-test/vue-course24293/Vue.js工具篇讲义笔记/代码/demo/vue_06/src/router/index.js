/*
 * @Date        : 2020-10-05 20:58:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 09:36:57
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\router\index.js
 * @Describe    : 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    //路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   console.log(from);
    //   console.log(to);
    //   next();
    // }
  },
  {
    path: '/about',
    name: 'About',
    //路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   console.log(from);
    //   console.log(to);
    //   next();
    // },
    meta: {
      title: "关于"
    },
    component: function () { //匿名函数
      return import('@/views/About.vue') //@代表src目录下
    }
  },
  {
    path: "/post",
    name: "Post",
    component: () => import('../views/Post.vue') //箭头表达式
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/Test.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 路由滚动
  scrollBehavior(to, from, savaPosition) {
    if (savaPosition) {
      return savaPosition; //前进后退时候记住当前位置
    } else {
      return {
        x: 30,
        y: 30
      }
    }
  }
})

// 模拟登录状态
const flag = true;

//全局前置前卫，拦截路由作用
router.beforeEach((to, from, next) => {
  if (to.meta.title !== undefined) {
    console.log(to.meta.title);
  };
  next();
});

export default router