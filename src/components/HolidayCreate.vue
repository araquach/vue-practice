<template>
    <div class="columns">
        <div class="column is-5">
            <router-link to="/">All Holidays</router-link>
            <br>
            <hr>
            <h1 class="title is-4">Book a Holiday</h1>
            <form @submit="addHoliday">
                <b-field label="Name"
                         :type="{ 'is-danger': $v.holiday.name.$error }">
                    <b-input v-model="holiday.name"
                             @blur="$v.holiday.name.$touch()"
                             placeholder="Name">
                    </b-input>
                </b-field>
                <template v-if="$v.holiday.name.$error"> <!-- displays when error is true -->
                    <p v-if="!$v.holiday.name.required" class="is-danger">Name is required.</p>
                </template>

                <b-field label="Age"
                         :type="{ 'is-danger': $v.holiday.age.$error }">
                    <b-input v-model.number="holiday.age"
                             @blur="$v.holiday.age.$touch()"
                             placeholder="Age">
                    </b-input>
                </b-field>
                <template v-if="$v.holiday.age.$error"> <!-- displays when error is true -->
                    <p v-if="!$v.holiday.age.required" class="is-danger">Age is required.</p>
                </template>

                <b-field label="Date"
                         :type="{ 'is-danger': $v.holiday.date.$error }">
                    <b-input v-model="holiday.date"
                             @blur="$v.holiday.date.$touch()"
                             placeholder="Age">
                    </b-input>
                </b-field>
                <template v-if="$v.holiday.date.$error"> <!-- displays when error is true -->
                    <p v-if="!$v.holiday.date.required" class="is-danger">Date is required.</p>
                </template>

                <div class="field">
                    <button class="button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {required} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                holiday: this.createNewHolidayObject()
            }
        },

        validations: {
            holiday: {
                name: { required },
                age: { required },
                date: { required }
            }
        },

        methods: {
            ...mapMutations([
                'newHoliday'
            ]),

            createNewHolidayObject() {
                return {
                    name: this.name,
                    age: this.age,
                    date: this.date
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