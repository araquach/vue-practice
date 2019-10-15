<template>
    <div>
        <component :is="selectedView" @switchView="switchView"/>
    </div>
</template>

<script>
    import TeamSplash from './TeamSplash.vue'
    import TeamInfo from './TeamInfo.vue'

    export default {
        components: {
            TeamSplash,
            TeamInfo
        },

        data() {
            return {
                selectedView: 'team-splash'
            }
        },

        methods: {
            switchView() {
                if (this.selectedView == 'team-info') {
                    this.selectedView = 'team-splash'
                } else {
                    this.selectedView = 'team-info'
                }
            }
        }
    }

</script>