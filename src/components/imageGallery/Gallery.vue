<template>
    <div>
        <image-list :images="images"/>
    </div>
</template>

<script>
    import ImageList from './ImegeList'

    export default {
        name: "gallery",
        components: {ImageList},

        data() {
            return {
                images: [
                    {id: 1, title: 'First Image', description: 'First Image Description', thumbnail: 'https://vuejsbook.com/img/vuejs/img1.jpg', imageLink: 'https://vuejsbook.com/img/vuejs/img1.jpg'},
                    {id: 2, title: 'Second Image', description: 'Second Image Description', thumbnail: 'https://vuejsbook.com/img/vuejs/img2.jpg', imageLink: 'https://vuejsbook.com/img/vuejs/img2.jpg'},
                    {id: 3, title: 'Third Image', description: 'Third Image Description', thumbnail: 'https://vuejsbook.com/img/vuejs/img3.jpg', imageLink: 'https://vuejsbook.com/img/vuejs/img3.jpg'},
                    {id: 4, title: 'Fourth Image', description: 'Fourth Image Description', thumbnail: 'https://vuejsbook.com/img/vuejs/img4.jpg', imageLink: 'https://vuejsbook.com/img/vuejs/img4.jpg'},
                    {id: 5, title: 'fifth Image', description: 'Fifth Image Description', thumbnail: 'https://vuejsbook.com/img/vuejs/img5.jpg', imageLink: 'https://vuejsbook.com/img/vuejs/img5.jpg'},
                    {id: 6, title: 'Sixth Image', description: 'Sixth Image Description', thumbnail: 'https://vuejsbook.com/img/vuejs/img6.jpg', imageLink: 'https://vuejsbook.com/img/vuejs/img6.jpg'},
                    {id: 7, title: 'Seventh Image', description: 'Seventh Image Description', thumbnail: 'https://vuejsbook.com/img/vuejs/img7.jpg,', imageLink: 'https://vuejsbook.com/img/vuejs/img7.jpg'},
                    {id: 8, title: 'Eighth Image', description: 'Eighth Image Description', thumbnail: 'https://vuejsbook.com/img/vuejs/img8.jpg', imageLink: 'https://vuejsbook.com/img/vuejs/img8.jpg'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>