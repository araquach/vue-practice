<template>
  <section>
    <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
      Launch component modal
    </button>

    <b-modal
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal>
      <template #default="props">
        <Modal v-bind="formProps" @close="props.close"></Modal>
      </template>
    </b-modal>
  </section>
</template>

<script>
import Modal from "./Modal"
export default {
  components: { Modal },

  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        email: 'evan@you.com',
        password: 'testing'
      }
    }
  }
}
</script>