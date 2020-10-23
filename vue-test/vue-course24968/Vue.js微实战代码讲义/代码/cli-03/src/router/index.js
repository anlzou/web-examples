import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta : {
            keepAlive : true        //需要缓存
        }
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: () => import('@/views/Details.vue'),
        meta : {
            keepAlive : false        //不需要缓存
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
