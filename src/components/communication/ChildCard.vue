<template>
    <div>
        <h1 v-text="thecardtitle" class="title is-5"></h1>
        <p v-html="thecardbody"></p>
        <div v-if="parentmessage" class="card-text alert alert-warning" v-html="parentmessage"></div>
        <button v-if="parentmessage" @click="ok" class="button is-success">Ok</button>
    </div>
</template>

<script>
    export default {
        props: ['parentmessage'],
        data() {
            return {
                thecardtitle: 'Child Component!',
                thecardbody: 'I\'m just a child.'
            }
        },

        methods: {
            ok() {
                this.$emit('finished')
            }
        }
    }
</script>