<template>
  <div class="home">
    <p>{{ msg }}</p>
    <button class="button" v-on:click="changeMsg()">Change Message</button>
  </div>
</template>

<script>
export default {
  method: {
    changeMsg() {
      this.$parent.msg = "I changed the message";
    }
  }
}
</script>