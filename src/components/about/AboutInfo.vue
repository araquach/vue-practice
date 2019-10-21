<template>
    <div class="hero is-warning">
        <div class="hero-body">
            <h1 class="title is-1">About Info</h1>
            <p>Here's some great info about us!!</p>
            <button class="button is-primary"
                    @click="isImageModalActive = true">
                Launch image modal
            </button>
            <button @click="switchView" class="button">Go Back</button>
            <AboutModal :isImageModalActive="isImageModalActive"/>
        </div>
    </div>
</template>

<script>
    import AboutModal from "./AboutModal"

    export default {
        components: {AboutModal},

        data() {
            return {
                isImageModalActive: false
            }
        },

        methods: {
            switchView() {
                this.$emit('switchView')
            }

        }
    }
</script>