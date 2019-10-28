<template>
    <div id="about" class="js-scroll-to-about">
        <component :is="selectedView" @switchView="switchView"/>
    </div>
</template>

<script>
    import AboutSplash from './AboutSplash.vue'
    import AboutInfo from './AboutInfo.vue'

    export default {
        components: {
            AboutSplash,
            AboutInfo
        },

        data() {
            return {
                selectedView: 'about-splash'
            }
        },

        methods: {
            switchView() {
                if (this.selectedView == 'about-info') {
                    this.selectedView = 'about-splash'
                } else {
                    this.selectedView = 'about-info'
                }
            }
        }
    }
</script>