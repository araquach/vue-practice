<template>
    <div>
        <button class="button" @click="increment">Increment</button>
        <button class="button" @click="decrement">Decrement</button>
    </div>
</template>
<script>
    export default {
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            }
        }
    }
</script>