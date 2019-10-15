<template>
    <div class="hero is-danger">
        <div class="hero-body">
            <h1 class="title is-1">Team Members</h1>
            <div v-for="(tm, index) in teamMembers">
                <p>{{firstName}}</p>
                <p>{{lastName}}</p>
            </div>
            <button @click="switchView" class="button">Switch back</button>
        </div>
    </div>
</template>

<script>
    import TeamInd from "./TeamInd"

    export default {
        components: {TeamInd},

        data() {
            return  {
                teamMembers: [
                    {firstName: "Adam", lastName: "Carter"},
                    {firstName: "Jimmy", lastName: "Sharpe"},
                    {firstName: "Izzy", lastName: "Lamb"}
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