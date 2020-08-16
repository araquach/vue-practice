<template>
  <div class="section box">
    <h3>Child Component</h3>
    <input
        type="text"
        v-model="inputData"
        @keyup="$emit('update:inputData', inputData);"
    />
    <p>Child data is: {{ inputData }}</p>
  </div>
</template>
<script>
export default {
  props: {
    inputData: String
  }
};
</script>