<template>
    <div class="columns">
        <div class="column is-5">
            <router-link to="/">All Holidays</router-link>
            <br>
            <hr>
            <h1 class="title is-4">Book a Holiday</h1>
            <form @submit="addHoliday">
                <div class="field">
                    <input type="text" v-model="holiday.name">
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
                holiday: this.createNewHolidayObject()
            }
        },

        methods: {
            ...mapMutations([
                'newHoliday'
            ]),

            createNewHolidayObject() {
                return {
                    name: name
                }
            },

            addHoliday() {
                this.$store.dispatch('addHoliday', this.holiday).then(() => {
                        this.holiday = this.createNewHolidayObject()
                    }).catch(() => {
                        console.log('there was a problem adding your holiday request')
                })
            }
        }
    }
</script>