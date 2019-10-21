<template>
    <div>
        <p v-for="person in people">
            {{person}}
        </p>
        <section>
            <b-modal :active.sync="isImageModalActive">
                <p class="image is-4by3">
                    <img src="/static/images/lauren_w.jpg">
                </p>
            </b-modal>
        </section>
    </div>
</template>

<script>
    export default {
        props: ['people']
    }
</script>
