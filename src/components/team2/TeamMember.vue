<template>
    <div @click="showModal">
        <div class="box">
            <p>Name: {{tm.firstName}} {{tm.lastName}}</p>
            <p>Age: {{tm.Age}}</p>
        </div>
        <div>
            <div v-if="isActive" class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <p>Name: {{tm.firstName}}</p>
                    <p>Age: {{tm.age}}</p>
                </div>
                <button class="modal-close is-large" aria-label="close" @click.stop="hideModal"></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['tm'],

        data() {
            return {
                isActive: false
            }
        },

        methods: {
            showModal() {
                this.isActive = true
            },

            hideModal() {
                this.isActive = false
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 200px;
    }
</style>