<template>
    <div class="hero is-primary">
        <div class="hero-body">
            <h1 class="title is-1">Home Info</h1>
            <p>Here's some great Information</p>
            <button @click="switchView" class="button">Switch back</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            switchView() {
                this.$emit('switchView')
            }
        }
    }
</script>