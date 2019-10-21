<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <button class="button"
                    @click="isComponentModalActive = true">
                Launch component modal
            </button>

            <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus>
                <ComponentModalForm v-bind="formProps"></ComponentModalForm>
            </b-modal>
        </div>
    </section>
</template>

<script>
    import ComponentModalForm from './ComponantModalForm'
    export default {
        components: {ComponentModalForm},

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