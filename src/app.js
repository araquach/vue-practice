import Vue from 'vue'
import store from './store'
import router from './routes'
import Axios from 'axios'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import Buefy from 'buefy'

Vue.use(Buefy)
Vue.use(Vuelidate)

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization']
}

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')