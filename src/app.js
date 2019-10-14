import Vue from 'vue'
import App from './App4.vue'
import Home from './components/home/Home'
import About from './components/about/About'
import Team from './components/team/Team'

Vue.component('home-component', Home)
Vue.component('about-component', About)
Vue.component('team-component', Team)


new Vue({
    el: '#app',
    render: h => h(App)
})