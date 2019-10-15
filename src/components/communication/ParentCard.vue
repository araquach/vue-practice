r<template>
    <div class="section box">
        <h1 class="title" v-text="theCardTitle"></h1>
        <button @click="sendMessage" class="button is-primary">Send Child A Message</button>
        <br><br>
        <child-card :parentmessage="parentmessage" @finished="finished" class="box"/>
    </div>
</template>

<script>
    import ChildCard from './ChildCard.vue'

    export default {
        components: {ChildCard},

        data() {
            return {
                theCardTitle: 'Parent Component',
                parentmessage: ''
            }
        },

        methods: {
            sendMessage() {
                this.parentmessage = '<b>Message From Parent:</b> Do Your Homework'
            },

            finished() {
                this.parentmessage = ''
            }
        }
    }
</script>