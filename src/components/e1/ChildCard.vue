<template>
  <div class="section">
    <div class="box">
      <h5 class="title is-4">Lower Level Component</h5>
      <p class="card-text">Paragraph</p>
      <div v-if="parentmessage" class="has-text-danger">{{ parentmessage }}</div>
      <button v-if="parentmessage" @click="ok" class="button is-success">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['parentmessage'],
  data() {
    return {

    }
  },
  methods: {
    ok() {
      this.$emit('finished')
    }
  }
}
</script>