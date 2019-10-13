<template>
    <div class="container">
        <div class="level">
            <button @click="selectedComponent = 'appQuote'" class="button">Quote</button>
            <button @click="selectedComponent = 'appAuthor'" class="button">Author</button>
            <button @click="selectedComponent = 'appNew'" class="button">New</button>
        </div>
        <component :is="selectedComponent"/>
    </div>

</template>

<script>
    import Quote from './components/quotes/Quote.vue'
    import Author from './components/quotes/Author.vue'
    import New from './components/quotes/New.vue'

    export default {
        data() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'app-quote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>