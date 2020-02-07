import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        holidays: [],
        newHoliday: {}
    },
    getters: {
        holidays: state => state.holidays
    },
    mutations: {
        SET_HOLIDAYS (state, holidays) {
            state.holidays = holidays
        },

        ADD_HOLIDAY (state, holiday) {
            state.holidays.push(holiday)
        }
    },

    actions: {
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

