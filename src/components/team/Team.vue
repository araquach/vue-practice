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
                if (this.selectedView == 'team-members') {
                    this.selectedView = 'team-splash'
                } else {
                    this.selectedView = 'team-members'
                }
            }
        }
    }

</script>