<template>
  <section>
    <div class="buttons">
      <button class="button is-primary is-medium"
              @click="cardModal()">
        Launch card modal (Component)
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "./Modal"
export default {
  components: { Modal },

  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: Modal,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true
      })
    }
  }
}
</script>