<template>
    <div>
        <home-component/>
        <about-component/>
        <team-component/>
        <ComponantModal/>
        <People/>
    </div>
</template>

<script>
    import People from "./components/people/People"
    import ComponantModal from "./components/ComponantModal/ComponantModal"

    export default {
        components: {People, ComponantModal},
        data() {
            return {

            }
        }

    }
</script>