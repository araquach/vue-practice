<template>
    <div class="hero is-warning">
        <div class="hero-body">
            <h1 class="title is-1">About Info</h1>
            <p>Here's some great info about us!!</p>
            <button @click="switchView" class="button">Go Back</button>
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