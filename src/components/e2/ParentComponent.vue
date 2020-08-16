<template>
  <div class="section box">
    <h3>Parent Component</h3>
    <p>Parent data is : {{ parentData }}</p>
    <ChildComponent :inputData.sync="parentData" />
  </div>
</template>
<script>
import ChildComponent from "./ChildComponent";

export default {
  components: {
    ChildComponent
  },

  data() {
    return {
      parentData: "Adam"
    }
  }
}
</script>