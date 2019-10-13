<template>
    <div class="container">
        <h1 class="title">User Detail</h1>
        <p>Name: {{name}}</p>
    </div>
</template>

<script>
    export default {
        props: ['name']
    }
</script>