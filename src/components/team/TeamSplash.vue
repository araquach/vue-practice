<template>
    <section id="team" class="team hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Meet the Base Team</h1>
                <h2 class="subtitle">from Junior Stylists through to experienced graduates</h2>
                <button @click="switchComponent" class="button">More info</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            switchView() {
                this.$emit('switchComponent')
            }
        }
    }
</script>