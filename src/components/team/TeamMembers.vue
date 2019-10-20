<template>
    <div class="hero is-danger">
        <div class="hero-body">
            <h1 class="title">Team Members</h1>
            <team-member :teamMembers="tm" v-for="tm in teamMembers" key="teamMembers.lastName"/>
        </div>
    </div>
</template>

<script>
    import TeamMember from "./TeamMember"

    export default {
        components: {TeamMember},

        data() {
            return  {
                selectedTeam: '',
                teamMembers: [
                    {firstName: "Adam", lastName: "Carter", age: "43"},
                    {firstName: "Jimmy", lastName: "Sharpe", age: "31"},
                    {firstName: "Izzy", lastName: "Lamb", age: "32"},
                    {firstName: "Natalie", lastName: "Doxey", age: "24"}
                ],
            }
        },

        methods: {
            switchView() {
                this.$emit('switchView')
            }
        }
    }
</script>