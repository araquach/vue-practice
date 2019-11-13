<template>
    <div>
        <h2 class="title is-4">The User Page</h2>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button @click="navigateToHome" class="button is-primary">Go to home</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },

        methods: {
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>