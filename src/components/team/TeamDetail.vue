<template>
    <div class="card">
        <div class="card-content columns">
            <div class="column">
                <figure class="image">
                    <img :src="selectedTM.Image" :alt="selectedTM.FirstName">
                </figure>
            </div>
            <div class="column">
                <div class="media">
                    <div class="media-content">
                        <h1 class="title has-text-primary">{{selectedTM.FirstName}} {{selectedTM.LastName}}</h1>
                        <h2 class="subtitle has-text-primary">{{selectedTM.Level}}</h2>
                        <p>{{selectedTM.Para1}}</p>
                        <p>{{selectedTM.Para2}}</p>
                        <p>{{selectedTM.Para3}}</p>
                        <p>Average Price: &pound;{{selectedTM.Price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectedTM']
    }
</script>