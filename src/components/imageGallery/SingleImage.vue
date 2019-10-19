<template>
    <div>
        <div>
            <img :src="selectedImage.imageLink">
        </div>
        <div>
            <h1>{{selectedImage.title}}</h1>
            <p>{{selectedImage.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectedImage']
    }
</script>