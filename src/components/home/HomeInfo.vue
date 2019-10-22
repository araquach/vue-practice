<template>
    <div class="hero is-primary">
        <div class="hero-body">
            <h1 class="title is-1">Home Info</h1>

            <form @submit="checkForm" action="/api/send" method="post">

                <div v-if="errors.length" class="box has-text-danger">
                    <p><strong>Please correct the following:</strong></p>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </div>

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
                        <button @click="createPost" class="button is-primary" type="submit" value="submit">Submit</button>
                    </div>
                </div>
            </form>



            <button @click="switchView" class="button">Switch back</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showInfo: false,
                errors: [],
                name: null,
                email: null,
                message: null
            }
        },

        methods: {
            switchView() {
                this.$emit('switchView')
            },

            checkForm(e) {
                this.errors = [];

                if (!this.name) {
                    this.errors.push('Name required.');
                }
                if (!this.email) {
                    this.errors.push('Email address required.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid Email address required.');
                }
                if (!this.message) {
                    this.errors.push('Message required')
                }

                if (!this.errors.length) {
                    return true;
                }
            },

            validEmail: function (email) {
                var re = re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(email);
            },

            createPost () {
                axios.post('./api/send', this.name, this.email, this.message).then(response => {
                        console.log(response.data)
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            }
        }
    }
</script>