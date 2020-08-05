import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Scene from '../views/Scene.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        title: 'Freek Fabricius - Lost My Controller',
    },
    {
        path: '/scenes/:id',
        name: 'Scene',
        component: Scene,
        title: 'Scene - Lost My Controller',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    /* fixes scroll bug: on mobile when navigating 
    to new route the page won't scroll to top 
    — unused to, from arguments are necessary to fix this */
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

export default router