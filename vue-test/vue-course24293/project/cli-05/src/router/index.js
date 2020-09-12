import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/element',
    name: 'ElementUI',
    component: () => import(/* webpackChunkName: "about" */ '../views/ElementUI.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/user/User')
  },
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/user-*',
    name: 'ElementUI',
    component: () => import('../views/ElementUI')
  },
]

const router = new VueRouter({
  routes
})

export default router
