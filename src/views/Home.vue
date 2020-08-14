<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="button" v-on:click="changeMsg()">Change Message</button>
  </div>
</template>

<script>
import HelloWorld from '../views/Home.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  method: {
    changeMsg() {
      this.$parent.msg = "I changed the message";
    }
  }
}
</script>