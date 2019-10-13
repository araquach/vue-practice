<template>
    <div class="container">
        <h1 class="title has-text-primary">The User Component</h1>
        <p class="is-size-3">I'm an awesome user called {{name}}</p>
        <br>
        <br>
        <button class="button" @click="changeName">Change my name</button>
        <hr>

    </div>
</template>

<script>
    export default {
        props: ['name'],

        methods: {
            changeName() {
                this.name = "Peter"
            }
        }
    }
</script>