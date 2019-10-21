<template>
    <div class="hero is-info">
        <div class="hero-body">
            <h1 class="title is-1">People</h1>
            <Person :people="people"/>
        </div>
    </div>
</template>

<script>
    import Person from './Person'

    export default {
        components: {Person},

        data() {
            return {
                people: ['Adam', 'Jimmy', 'Izzy', 'Nat']
            }
        }
    }
</script>