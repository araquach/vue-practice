<template>
    <div>
        <router-link to="/book">Book Holiday</router-link>
        <br>
        <hr>
        <h1 class="title is-3">All Holidays</h1>
        <div class="columns is-multiline">
            <holidayInd v-for="(holiday, index) in holidays"
                        :key="index"
                        :holiday="holiday"
            />
        </div>
    </div>
</template>

<script>
    import HolidayInd from './HolidayInd'
    import {mapGetters} from 'vuex'
    import {mapState} from 'vuex'

    export default {
        components: {HolidayInd},

        mounted() {
            this.$store.dispatch('loadHolidays')
        },

        computed: {
            ...mapGetters([
                'holidays'
            ]),

            ...mapState([
                'loadHolidays'
            ])
        }
    }
</script>