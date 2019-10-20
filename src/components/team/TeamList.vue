<template>
    <div class="columns">
        <div v-for="tm in TeamMembers" :key="tm.id" class="section column is-4">
            <div @click="emitTM(tm)" class="card">
                <div class="card-image">
                    <figure class="image">
                        <img :src="tm.Image" :alt="tm.FirstName">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <h1 class="title">{{tm.FirstName}} {{tm.LastName}}</h1>
                            <p>{{tm.Para1}}</p>
                            <p>{{tm.Para2}}</p>
                            <p>{{tm.Para3}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['TeamMembers'],

        methods: {
            emitTM(tm) {
                this.$emit('emitTM', tm)
            }
        }
    }
</script>