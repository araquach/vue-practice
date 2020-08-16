<template>
  <div class="section">
    <div class="box">
      <h5 class="title is-3" v-text="thecardtitle">Top Level Component</h5>
      <button @click="sendMessage" class="button is-primary">Send down</button>
      <child-card :parentmessage="parentmessage" @finished="finished"></child-card>
    </div>
  </div>
</template>

<script>
import ChildCard from '../e1/ChildCard.vue'

export default {
  components: {ChildCard},

  data() {
    return {
      parentmessage: ''
    }
  },

  methods: {
    sendMessage() {
      this.parentmessage = 'Lazy'
    },
    finished() {
      this.parentmessage = 'Doughnuts'
    }
  }
}
</script>