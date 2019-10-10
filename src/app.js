import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import HomeInfo from './components/HomeInfo'
import About from './components/About'
import AboutInfo from './components/AboutInfo'
import Team from './components/Team'
import TeamInfo from './components/TeamInfo'
import TeamInd from './components/TeamInd'

Vue.component('home-component', Home)
Vue.component('home-info-component', HomeInfo)
Vue.component('about-component', About)
Vue.component('about-info-component', AboutInfo)
Vue.component('team-component', Team)
Vue.component('team-info-component', TeamInfo)
Vue.component('team-individual-component', TeamInd)


new Vue({
    el: '#app',
    render: h => h(App)
})