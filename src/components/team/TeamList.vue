<template>
    <div>
        <div v-for="tm in TeamMembers" :key="tm.id">
            <a href="#" @click="emitTM(tm)">
                <h1 class="title">{{tm.FirstName}} {{tm.LastName}}</h1>
                <p>{{tm.Para1}}</p>
                <p>{{tm.Para2}}</p>
                <p>{{tm.Para3}}</p>
                <img :src="tm.Image"/>
            </a>
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