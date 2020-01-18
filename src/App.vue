<template>
    <div>
        <h1 class="title is-1">Vuex</h1>
        <Result/>
        <AnotherResult/>
        <hr>
        <Counter/>
        <AnotherCounter/>
    </div>
</template>

<script>
    import Counter from './components/Counter'
    import AnotherCounter from "./components/AnotherCounter"
    import Result from './components/Result'
    import AnotherResult from "./components/AnotherResult"

    export default {
        components: {AnotherCounter, Counter, Result, AnotherResult }
    }
</script>