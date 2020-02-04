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
                <b-field label="Saturdays">
                    <b-input v-model="saturdays"></b-input>
                    <button class="button" @click="saturdays -= .5">-</button>
                    <button class="button" @click="saturdays += .5">+</button>
                </b-field>
                <p>Total Saturdays: {{totalSat}}</p>
                <div class="field">
                    <button class="button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import moment from 'moment'
    export default {
        data() {
            return {
                start_date: null,
                end_date: null,
                saturdays: 0
            }
        },

        computed: {
            totalSat() {
                const start = moment(this.start_date)
                const end = moment(this.end_date)

                const dailyInfo = [false, false, false, false, false, false, true]
                let totalDays = 0;

                dailyInfo.forEach((info, index) => {
                    if (info === true) {
                        let current = start.clone();
                        if (current.isoWeekday() <= index) {
                            current = current.isoWeekday(index);
                        } else {
                            current.add(1, 'weeks').isoWeekday(index);
                        }
                        while (current.isSameOrBefore(end)) {
                            current.day(7 + index);
                            totalDays += 1;
                        }
                    }
                })
                return this.saturdays = totalDays
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