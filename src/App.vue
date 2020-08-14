<template>
  <div class=" section">
    <h1 class="title is-2">Test App</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <p>{{ msg }}</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: "Hello World"
    }
  }
}
</script>