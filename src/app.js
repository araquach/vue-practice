import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import Buefy from 'buefy'
import { routes } from "./routes"


Vue.use(Buefy)
Vue.use(Vuelidate)
Vue.use(VueRouter)

import { store } from './store/store'


window.axios = require('axios')

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
