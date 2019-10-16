<template>
    <div class="hero is-danger">
        <div class="hero-body">
            <h1 class="title">Team Members</h1>
            <team-member
                    v-for="(tm, index) in teamMembers"
                    :firstName=tm.firstName
                    :lastName=tm.lastName
                    :age=tm.age
                    :key="index"
            />
        </div>
    </div>
</template>

<script>
    import TeamMember from "./TeamMember"

    export default {
        components: {TeamMember},

        data() {
            return  {
                teamMembers: [
                    {firstName: "Adam", lastName: "Carter", age: "43"},
                    {firstName: "Jimmy", lastName: "Sharpe", age: "31"},
                    {firstName: "Izzy", lastName: "Lamb", age: "32"}
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