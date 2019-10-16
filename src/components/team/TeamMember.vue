<template>
    <div>
        <div class="box">
            <p>Name: {{firstName}} {{lastName}}</p>
            <p>Age: {{age}}</p>
        </div>
        <team-detail>
            <h1 class="title has-text-primary">{{firstName}} {{lastName}}</h1>
            <p>{{age}}</p>
        </team-detail>
    </div>
</template>

<script>
    import TeamDetail from "./TeamDetail"
    export default {
        components: {TeamDetail},

        props: ['firstName', 'lastName', 'age'],

        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .box {
        width: 200px;
    }
</style>