<template>
    <div>
        <button class="button" @click="increment(500)">Increment</button>
        <button class="button" @click="decrement(100)">Decrement</button>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>