import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token' || ''),
        user: {},
        holidays: [],
        newHoliday: {}
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        holidays: state => state.holidays
    },
    mutations: {
        AUTH_REQUEST (state){
            state.status = 'loading'
        },
        AUTH_SUCCESS (state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        AUTH_ERROR (state){
            state.status = 'error'
        },
        LOGOUT (state){
            state.status = ''
            state.token = ''
        },

        SET_HOLIDAYS (state, holidays) {
            state.holidays = holidays
        },

        ADD_HOLIDAY (state, holiday) {
            state.holidays.push(holiday)
        }
    },

    actions: {
        login ({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('AUTH_REQUEST')
                axios({url: '/login', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('AUTH_SUCCESS', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('AUTH_ERROR')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },

        register ({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('AUTH_REQUEST')
                axios({url: '/signup', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('AUTH_SUCCESS', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('AUTH_ERROR', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },

        logout ({commit}) {
            return new Promise((resolve, reject) => {
                commit('LOGOUT')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },

        loadHolidays ({ commit }) {
            return axios
                .get('/api/holidays')
                .then(r=> r.data)
                .then(holidays => {
                    commit('SET_HOLIDAYS', holidays)
                })
        },

        addHoliday ({ commit }, holiday) {
            axios.post('/api/holiday', holiday).then(_ => {
                commit('ADD_HOLIDAY', holiday)
            })
        }
    }
})

