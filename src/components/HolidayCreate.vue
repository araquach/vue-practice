<template>
    <div class="columns">
        <div class="column is-5">
            <router-link to="/">All Holidays</router-link>
            <br>
            <hr>
            <h1 class="title is-4">Book a Holiday</h1>
            <form @submit.prevent="submit">
                <b-field label="Start date">
                    <b-datepicker
                            v-model="start_date"
                            placeholder="Start Date"
                            icon="calendar-today">
                    </b-datepicker>
                </b-field>

                <b-field label="End date">
                    <b-datepicker
                            v-model="end_date"
                            placeholder="End Date"
                            icon="calendar-today">
                    </b-datepicker>
                </b-field>
                <div class="field">
                    <label>Saturdays</label>
                    <input v-model="saturdays">
                </div>
                <div class="field">
                    <button class="button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        data() {
            return {
                start_date: null,
                end_date: null,
                saturdays: 0
            }
        },

        methods: {
            ...mapMutations([
                'newHoliday'
            ]),

            submit() {
                console.log('submit!')
                    axios.post('/api/holiday', {
                        start_date: this.start_date,
                        end_date: this.end_date,
                        saturdays: this.saturdays
                    })
                    .catch((e) => {
                        console.error(e)
                    })
                }
        }
    }
</script>