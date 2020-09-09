import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    //路由独享守卫
    beforeEnter : (to, from, next) => {
      //console.log(to)
      //console.log(from)
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('@/views/Post.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta : {
        title : '关于'
    },
    component: () => import('@/views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from) {
    return {
      x : 0,
      y : 0
    }
  }
})

//模拟登录状态
const flag = true

//全局前置守卫，拦截路由作用
router.beforeEach((to, from, next) => {
  if (to.meta.title !== undefined) {
    console.log(to.meta.title)
  }

  //console.log('开始loading...')
  //如果登录成功
  if (flag) {
    //继续执行正常跳转
    if (to.name === 'Login') next('/')
    else next()
  } else {
    //跳转到指定的登录页login
    if (to.name === 'Login') next()
    else next('/login')
  }
})

//全局后置钩子
router.afterEach((to, from) => {
  //console.log('关闭loading...')
})



export default router
