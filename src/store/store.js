import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        holidays: []
    },
    getters: {
        holidays: state => state.holidays
    },
    mutations: {
        SET_HOLIDAYS (state, holidays) {
            state.holidays = holidays
        },

        newHoliday (state, holidays, payload) {
            holidays.push(payload)
        }
    },

    actions: {
        loadHolidays ({ commit }) {
            axios
                .get('/api/holidays')
                .then(r=> r.data)
                .then(holidays => {
                    commit('SET_HOLIDAYS', holidays)
                })
        }
    },
    modules: {

    }
})

