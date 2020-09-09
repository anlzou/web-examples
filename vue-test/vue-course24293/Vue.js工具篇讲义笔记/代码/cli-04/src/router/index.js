import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import User from "../views/User"
import UserProfile from "../views/user/UserProfile"
import UserPosts from "../views/user/UserPosts"
import Sidebar from "../views/Sidebar"
import Footer from "../views/Footer"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default : Home,
      sidebar : Sidebar,
      footer  : Footer
    }
  },
  {
    path: '*',
    component: Home
  },
  // {
  //   path: '/user-*',
  //   name: 'List',
  //   component: List
  // },

  {
    path: '/a',
    //redirect : '/list'
    // redirect : {
    //   name : 'List'
    // }
    redirect : to => {
      if (true) {
        //return '/list'
        console.log(to)
        return {
          name : 'List'
        }
      }
    }
  },
  {
    path: '/list',
    name: 'List',
    alias : '/liebiao',
    // props : {
    //     data : '列表'
    // },
    // component: List,

    props : {
      default : {
        data : '列表'
      },
    },

    components: {
      default : List,
      sidebar : Sidebar,
      footer  : Footer
    }
  },
  // {
  //   path: '/user',
  //   name: 'User',
  //   component: User,
  // },
  {
    path: '/user/:id',
    name: 'User',
    props : true,
    component: User,
    children : [
      {
        path : 'profile',
        component : UserProfile
      },
      {
        path : 'posts',
        component : UserPosts
      },
      {
        path : '*',
        component : List
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // props : route => ({
    //   search : route.query.search
    // })

    components: {
      default : () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      sidebar : Sidebar,
      footer  : Footer
    },

    props : {
      default : route => ({
        search : route.query.search
      }),
    }
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
