<template>
    <div class="section">
        <h1 class="title is-4">Stylists</h1>
        <ul>
            <li v-for="stylist in stylists">{{stylist.Name}} - {{stylist.Level}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                stylists: []
            }
        },

        created() {
            axios.get('/api/team').then(response => this.stylists = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>