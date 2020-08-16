<template>
  <div class="section box">
    <h3>Colour Selector</h3>
<!--    <input-->
<!--        type="number"-->
<!--        v-model.number="chosenColour"-->
<!--        @keyup="$emit('update:chosenColour', chosenColour);"-->
<!--    />-->

    <button class="button" v-model.number="chosenColour" @click="$emit('update:chosenColour',1)">
      Colour 1
    </button>
    <button class="button" v-model.number="chosenColour" @click="$emit('update:chosenColour',2)">
      Colour 2
    </button>
    <button class="button" v-model.number="chosenColour" @click="$emit('update:chosenColour',3)">
      Colour 3
    </button>
    <button class="button" v-model.number="chosenColour" @click="$emit('update:chosenColour',4)">
      Colour 4
    </button>
    <button class="button" v-model.number="chosenColour" @click="$emit('update:chosenColour',5)">
      Colour 5
    </button>


    <p>Chosen Colour: {{ chosenColour }}</p>
  </div>
</template>
<script>
export default {
  props: {
    chosenColour: Number
  }
};
</script>