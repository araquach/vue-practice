<template>
    <div>
        <component :is="selectedView" @switchView="switchView"/>
    </div>
</template>

<script>
    import HomeSplash from './HomeSplash.vue'
    import HomeInfo from './HomeInfo.vue'

    export default {
        components: {
            HomeSplash,
            HomeInfo
        },

        data() {
            return {
                selectedView: 'home-splash'
            }
        },

        methods: {
            switchView() {
                if (this.selectedView == 'home-info') {
                    this.selectedView = 'home-splash'
                } else {
                    this.selectedView = 'home-info'
                }
            }
        }
    }

</script>