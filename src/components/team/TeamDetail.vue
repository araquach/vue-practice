<template>
    <div>
        <div>
            <h1 class="title">{{selectedTM.FirstName}} {{selectedTM.LastName}}</h1>
            <p>{{selectedTM.Para1}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectedTM']
    }
</script>