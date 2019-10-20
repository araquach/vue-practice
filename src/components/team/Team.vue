<template>
    <div>
        <component :is="selectedView" @switchView="switchView"/>
    </div>
</template>

<script>
    import TeamSplash from './TeamSplash.vue'
    import TeamMembers from './TeamMembers.vue'

    export default {
        components: {
            TeamSplash,
            TeamMembers
        },

        data() {
            return {
                selectedView: 'team-splash'
            }
        },

        methods: {
            switchView() {
                if (this.selectedView == 'TeamMembers') {
                    this.selectedView = 'TeamSplash'
                } else {
                    this.selectedView = 'TeamMembers'
                }
            }
        }
    }

</script>