<template>
    <div>
        <component :is="selectedAbout"/>
    </div>
</template>

<script>
    import AboutSplash from './AboutSplash.vue'
    import AboutInfo from './AboutInfo.vue'

    export default {
        data() {
            return {
                selectedAbout: 'about-splash'
            }
        },
        components: {
            aboutSplash: AboutSplash,
            aboutInfo: AboutInfo
        }
    }

</script>