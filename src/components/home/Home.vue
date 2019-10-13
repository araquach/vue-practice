<template>
    <div>
        <component :is="selectedHome"/>
    </div>
</template>

<script>
    import HomeSplash from './HomeSplash.vue'
    import HomeInfo from './HomeInfo.vue'

    export default {
        data() {
            return {
                selectedHome: 'home-splash'
            }
        },
        components: {
            homeSplash: HomeSplash,
            homeInfo: HomeInfo
        }
    }

</script>