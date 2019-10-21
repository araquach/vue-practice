<template>
    <section>
        <b-modal :active.sync="isImageModalActive">
            <p class="image is-4by3">
                <img src="/static/images/laurem_w.jpg">
            </p>
        </b-modal>
    </section>
</template>

<script>
    export default {
        props: ['isImageModalActive'],

        data() {

        }
    }
</script>