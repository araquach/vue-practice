<template>
  <div class="section">
    <div class="box">
      <h5 class="title is-4" v-text="thecardtitle"></h5>
      <p class="card-text" v-html="thecardbody"></p>
      <div v-if="parentmessage" class="has-text-danger" v-html="parentmessage"></div>
    </div>
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
  }
}
</script>