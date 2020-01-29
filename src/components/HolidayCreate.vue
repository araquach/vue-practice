<template>
    <div class="columns">
        <div class="column is-5">
            <router-link to="/">All Holidays</router-link>
            <br>
            <hr>
            <h1 class="title is-4">Book a Holiday</h1>
            <form @submit.prevent="submit">
                <b-field label="Staff"
                         :type="{ 'is-danger': $v.staff.$error }"
                         :message="{'Staff Required' : !staff.required}">
                    <b-input v-model.trim="$v.staff.$model"
                             placeholder="Staff">
                    </b-input>
                </b-field>
                <b-field label="Days"
                         :type="{ 'is-danger': $v.days.$error }"
                         :message="{'Days required' : !days.required}">
                    <b-numberinput v-model.trim="$v.days.$model"
                                   placeholder="Days">
                    </b-numberinput>
                </b-field>
                <br>
                <div class="field">
                    <div class="control">
                        <button class="button is-primary"
                                type="submit"
                                :disabled="submitStatus === 'PENDING'">
                            Book Holiday
                        </button>
                    </div>
                </div>

                <div v-if="submitStatus === 'OK'">
                    <p class="is-size-4 has-text-primary">Holiday request submitted</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {required, numeric, minValue} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                staff : '',
                days: 0,
                submitStatus: null
            }
        },

        validations: {
            staff: {required},
            days: {
                required,
                numeric,
                minValue: minValue(1)
            }
        },

        methods: {
            submit() {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    axios.post('/api/holiday', {
                        staff: this.staff,
                        days: this.days
                    })
                        .then(response => {
                            this.submitStatus = 'OK'
                        })
                        .catch((e) => {
                            console.error(e)
                        })
                }
            }
        }
    }
</script>