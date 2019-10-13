<template>
    <div @click="switchView">
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

        methods: {
            switchView() {
                this.selectedHome = 'home-info'
            }
        },

        components: {
            homeSplash: HomeSplash,
            homeInfo: HomeInfo
        }
    }

</script>