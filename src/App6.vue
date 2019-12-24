<template>
    <div class="container">
        <h1 class="title">Routing</h1>
        <hr>
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    import Header from './components/router/Header'
    export default {
        components: {Header}
    }
</script>
