<template>
    <div>
        <component :is="selectedTeam"/>
    </div>
</template>

<script>
    import TeamSplash from './TeamSplash.vue'
    import TeamInfo from './TeamInfo.vue'

    export default {
        data() {
            return {
                selectedTeam: 'team-splash'
            }
        },
        components: {
            teamSplash: TeamSplash,
            teamInfo: TeamInfo
        }
    }

</script>