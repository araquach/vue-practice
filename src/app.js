import Vue from 'vue'
import App from './App.vue'
import Nav from './components/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Team from './components/team/Team'

import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import 'buefy/dist/buefy.css'

window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(Buefy)
Vue.use(VueScrollTo)

Vue.component('nav-component', Nav)
Vue.component('home-component', Home)
Vue.component('about-component', About)
Vue.component('team-component', Team)


new Vue({
    el: '#app',
    render: h => h(App)
})
