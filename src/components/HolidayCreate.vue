<template>
    <div class="columns">
        <div class="column is-5">
            <router-link to="/">All Holidays</router-link>
            <br>
            <hr>
            <h1 class="title is-4">Book a Holiday</h1>
            <form @submit.prevent="submit">
                <b-field label="Staff">
                    <b-input v-model="staff"
                             placeholder="Staff">
                    </b-input>
                </b-field>
                <b-field label="ID">
                    <b-numberinput v-model="id"
                                   placeholder="ID">
                    </b-numberinput>
                </b-field>
                <b-field label="Days">
                    <b-numberinput v-model="days"
                                   placeholder="Days">
                    </b-numberinput>
                </b-field>
                <br>
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" type="submit">Book Holiday</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: null,
                staff : null,
                days: null
            }
        }
    }
</script>