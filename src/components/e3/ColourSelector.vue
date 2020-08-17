<template>
  <div class="section box">
    <h3>Colour Selector</h3>

    <button class="button" v-model.number="selectedColour" @click="$emit('update:selectedColour',1)">
      Colour 1
    </button>
    <button class="button" v-model.number="selectedColour" @click="$emit('update:selectedColour',2)">
      Colour 2
    </button>
    <button class="button" v-model.number="selectedColour" @click="$emit('update:selectedColour',3)">
      Colour 3
    </button>
    <button class="button" v-model.number="selectedColour" @click="$emit('update:selectedColour',4)">
      Colour 4
    </button>
    <button class="button" v-model.number="selectedColour" @click="$emit('update:selectedColour',5)">
      Colour 5
    </button>


    <p>Selected Colour: {{ selectedColour }}</p>
  </div>
</template>
<script>
export default {
  props: {
    selectedColour: Number
  }
};
</script>