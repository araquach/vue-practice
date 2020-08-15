<template>
  <div class="section">
    <div class="box">
      <h5 class="title is-3" v-text="thecardtitle"></h5>
      <button @click="sendMessage" class="button is-primary">Send Child A Message</button>
      <child-card :parentmessage="parentmessage"></child-card>
    </div>
  </div>
</template>

<script>
import ChildCard from './ChildCard.vue';

export default {
  components: {ChildCard},

  data() {
    return {
      thecardtitle: 'Parent Component!',
      parentmessage: ''
    }
  },

  methods: {
    sendMessage() {
      this.parentmessage = '<b>Message From Parent:</b> Do Your Homework'
    }
  }
}
</script>