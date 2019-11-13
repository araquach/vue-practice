<template>
    <ul class="level">
        <div class="level-left">
            <router-link to="/"  tag="li" class="button is-primary" active-class="is-active" exact>Home</router-link>
            <router-link to="/user/1" tag="li" class="button is-danger" active-class="is-active">User 1</router-link>
            <router-link to="/user/2" tag="li" class="button is-danger" active-class="is-active">User 2</router-link>
        </div>
    </ul>
</template>