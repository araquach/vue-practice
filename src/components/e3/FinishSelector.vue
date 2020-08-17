<template>
  <div class="section box">
    <h3>Finish Selector</h3>
    <button class="button" v-model.number="chosenFinish" @click="$emit('update:chosenFinish',1)">
      Finish 1
    </button>
    <button class="button" v-model.number="chosenFinish" @click="$emit('update:chosenFinish',2)">
      Finish 2
    </button>
    <button class="button" v-model.number="chosenFinish" @click="$emit('update:chosenFinish',3)">
      Finish 3
    </button>
    <button class="button" v-model.number="chosenFinish" @click="$emit('update:chosenFinish',4)">
      Finish 4
    </button>
    <button class="button" v-model.number="chosenFinish" @click="$emit('update:chosenFinish',5)">
      Finish 5
    </button>


    <p>Chosen Finish: {{ chosenFinish }}</p>
  </div>
</template>
<script>
export default {
  props: {
    chosenFinish: Number
  }
};
</script>