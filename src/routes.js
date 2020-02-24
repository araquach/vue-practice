import Vue from 'vue'
import Login from './components/auth/Login.vue'
import Router from 'vue-router'
import Secure from './components/auth/Secure.vue'
import Register from './components/auth/Register.vue'
import store from './store.js'

import HolidayIndex from './components/HolidayIndex'
import HolidayCreate from './components/HolidayCreate'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/secure',
            name: 'secure',
            component: Secure,
            meta: {
                requiresAuth: true
            }
        },

        { path: '', component: HolidayIndex},
        { path: '/book', component: HolidayCreate},
    ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router

