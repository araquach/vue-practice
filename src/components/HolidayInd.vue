<template>
    <div class="column is-3">
        <div class="box">
            <p>ID: {{holiday.id}}</p>
            <p>Name: {{holiday.staff}}</p>
            <p>Days: {{holiday.days}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['holiday']
    }
</script>