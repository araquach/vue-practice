<template>
  <div class="section box">
    <h3>Main Selector</h3>
    <p>Selected Colour : {{ selectedColour }}</p>
    <ColourSelector :chosenColour.sync="selectedColour" />
  </div>
</template>
<script>
import ColourSelector from "./ColourSelector";

export default {
  components: {
    ColourSelector
  },

  data() {
    return {
      selectedColour: 0
    }
  }
}
</script>