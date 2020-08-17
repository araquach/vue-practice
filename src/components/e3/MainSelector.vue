<template>
  <div class="section box">
    <h3>Main Selector</h3>
    <ColourSelector :selectedColour.sync="selectedColour" />
    <FinishSelector :selectedFinish.sync="selectedFinish"/>

    <p>Selected Colour : {{ selectedColour }}</p>
    <p>Selected Finish : {{ selectedFinish }}</p>
    <p><strong>Total: {{ selectedColour + selectedFinish }}</strong></p>
  </div>
</template>
<script>
import ColourSelector from "./ColourSelector"
import FinishSelector from "./FinishSelector"

export default {
  components: {
    ColourSelector,
    FinishSelector
  },

  data() {
    return {
      selectedColour: 0,
      selectedFinish: 0
    }
  }
}
</script>