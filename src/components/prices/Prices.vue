<template>
    <div class="section">
        <h1 class="title is-4">Services</h1>
        <ul>
            <li v-for="service in services">Colour: £{{service.C45}} - Cut, Dry & Style: £{{service.CDS}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                services: []
            }
        },

        created() {
            axios.get('/api/services').then(response => this.services = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>