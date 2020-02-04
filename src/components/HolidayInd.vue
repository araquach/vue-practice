<template>
    <div class="column is-3">
        <div class="box">
            <p>ID: {{holiday.id}}</p>
            <p>Start Date: {{holiday.start_date}}</p>
            <p>End Date: {{holiday.end_date}}</p>
            <p>Saturdays: {{holiday.saturdays}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['holiday']
    }
</script>