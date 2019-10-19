<template>
    <div>
        <single-image :selectedImage="selectedImage" />

        <div v-for="image in images" :key="image.id">
            <a href="#" @click="showImage(image)">
                <img :src="image.thumbnail"/>
            </a>
        </div>
    </div>
</template>

<script>
    import SingleImage from './SingleImage'

    export default {
        props: ['images'],
        components: {SingleImage},

        data() {
            return {
                selectedImage: ''
            }
        },

        methods: {
            showImage(image) {
                this.selectedImage = image
            }
        }
    }
</script>