<template>
    <div class="hero is-danger">
        <div class="hero-body">
            <h1 class="title is-1">Individual Team Member</h1>
            <p>Name: {{tm.firstName}}</p>
            <p>Age: {{tm.lastName}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['tm'],

        data() {
            return {

            }
        }
    }
</script>