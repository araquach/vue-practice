<template>
    <section>
        <button class="button is-primary is-medium"
                @click="isTestModalActive = true">
            Launch component modal
        </button>

        <b-modal :active.sync="isTestModalActive"
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
            <TestModal v-bind="formProps"></TestModal>
        </b-modal>
    </section>
</template>

<script>
    import TestModal from "./TestModal"

    export default {
        components: { TestModal },

        data() {
            return {
                isTestModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
            }
        }
    }
</script>