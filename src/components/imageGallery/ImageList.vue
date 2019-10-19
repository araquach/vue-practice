<template>
    <div v-for="image in images" :key="image.id">
        <a href="#" @click="emitImage(image)">
            <img :src="image.thumbnail"/>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['images'],

        methods: {
            emitImage(image) {
                this.$emit('emitImage',image)
            }
        }
    }
</script>