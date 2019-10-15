<template>
    <div class="box" @click="moreInfo = true">
        <p>Name: {{firstName}} {{latName}}</p>

        <div v-if="moreInfo">
            <p class="is-size-2">Age: {{age}}</p>
            <p @click="moreInfo = false" class="is-primary">Hide</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['firstName', 'latName', 'age'],

        data() {
            return {
                moreInfo: false
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 200px;
    }
</style>