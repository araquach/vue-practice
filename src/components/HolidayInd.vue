<template>
    <div class="column is-3">
        <div class="box">
            <p>ID: {{holiday.id}}</p>
            <p>Name: {{holiday.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['holiday']
    }
</script>