<template>
    <div>
        <button class="button" @click="asyncIncrement({by: 50, duration: 2000})">Increment</button>
        <button class="button" @click="asyncDecrement({by: 20, duration: 1000})">Decrement</button>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
           ])
        }
    }
</script>