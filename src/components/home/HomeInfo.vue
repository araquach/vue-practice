<template>
    <div class="hero is-primary">
        <div class="hero-body">
            <h1 class="title is-1">Home Info</h1>

            <form>
                <div class="field">
                    <label class="label has-text-white">Full Name</label>
                    <div class="control">
                        <input class="input" v-model="name" name="name" type="text" placeholder="Your Full Name">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-white">Email Address</label>
                    <div class="control">
                        <input class="input" v-model="email" name="email" type="text" placeholder="Your Email Address">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-white">Message</label>
                    <div class="control">
                        <input class="textarea" v-model="message" name="message" type="text" placeholder="Message">
                    </div>
                </div>
                <br>
                <div class="field">
                    <div class="control">
                        <button @click.prevent="createPost" class="button">Submit</button>
                    </div>
                </div>
            </form>
            <br>
            <br>
            <button @click="switchView" class="button">Switch back</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showInfo: false,
                name: null,
                email: null,
                message: null
            }
        },

        methods: {
            switchView() {
                this.$emit('switchView')
            },

            createPost () {
                axios.post('/api/send', {
                        name: this.name,
                        email: this.email,
                        message: this.message
                    })
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            }
        }
    }
</script>