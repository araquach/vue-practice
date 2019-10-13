<template>
    <div>
        <component :is="selectedHome"/>
    </div>
</template>

<script>
    import HomeSplash from '../components/HomeSplash.vue'
    import HomeInfo from '../components/HomeInfo.vue'

    export default {
        data() {
            return {
                selectedHome: 'home-info'
            }
        },
        components: {
            homeSplash: HomeSplash,
            homeInfo: HomeInfo
        }
    }

</script>