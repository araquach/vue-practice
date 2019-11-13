<template>
    <div>
        <h2 class="title is-4">The User Page</h2>
        <hr>
        <button @click="navigateToHome" class="button is-primary">Go to home</button>
    </div>
</template>
<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>