import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from "../views/user/User";
import ElementUI from "../views/ElementUI";

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
    component: ElementUI
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    children : [
      {
        path : 'profile',
        component : () => import('../views/user/UserProfile')
      },
      {
        path : 'posts',
        component : () => import('../views/user/UserPosts')
      }
    ]
  },
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/user-*',
    name: 'ElementUI_',
    component: ElementUI
  },
]

const router = new VueRouter({
  routes
})

export default router
