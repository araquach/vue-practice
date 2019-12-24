<template>
    <div class="container">
        <h1 class="title has-text-primary">Price Calculator</h1>
        <Stylist/>
        <Prices/>
    </div>
</template>

<script>
    import Prices from "./components/prices/Prices"
    import Stylist from "./components/prices/Stylist"

    export default {
        components: {Prices, Stylist},
    }
</script>