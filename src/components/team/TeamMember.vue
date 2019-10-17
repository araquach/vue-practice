<template>
    `<div @click="showModal">
        <div class="box">
            <p>Name: {{firstName}} {{lastName}}</p>
            <p>Age: {{age}}</p>
        </div>
        <div>
            <div v-if="isActive" class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <p>Name: {{firstName}}</p>
                    <p>Age: {{age}}</p>
                </div>
                <button class="modal-close is-large" aria-label="close" @click.stop="hideModal"></button>
            </div>
        </div>
    </div>`
</template>

<script>
    export default {
        props: ['firstName', 'lastName', 'age'],

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