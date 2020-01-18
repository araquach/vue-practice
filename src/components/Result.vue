<template>
    <div>
        <p>Count: {{ doubleCounter }}</p>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters([
                'doubleCounter'
            ])
        }
    }
</script>