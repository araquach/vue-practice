<template>
    <b-navbar fixed-top>
        <template slot="brand">
            <b-navbar-item>
                <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#" v-scroll-to="'#home'">
                Home
            </b-navbar-item>
            <b-navbar-item href="#about" v-scroll-to="'#about'">
                About
            </b-navbar-item>
            <b-navbar-dropdown label="More">
                <b-navbar-item href="#team" v-scroll-to="'#team'">
                    Team
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>