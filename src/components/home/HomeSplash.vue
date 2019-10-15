<template>
    <div class="hero is-primary">
        <div class="hero-body">
            <h1 class="title is-1">Home Splash Page</h1>
            <button @click="switchView" class="button">More info</button>
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