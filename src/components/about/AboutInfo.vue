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
        </div>
        <section>
            <b-modal :active.sync="isImageModalActive">
                <p class="image is-4by3">
                    <img src="/static/images/lauren_w.jpg">
                </p>
            </b-modal>
        </section>
    </div>
</template>

<script>
    export default {
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