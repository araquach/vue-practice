<template>
    <div class="container">
        <h1>The User Component</h1>
        <p>I'm an awesome user</p>
        <button class="button" @click="changeName">Change my name</button>
        <hr>
        <div>
            <app-user-detail></app-user-detail>
            <app-user-edit></app-user-edit>
        </div>
    </div>
</template>

<script>
    import UserDetail from './components/props/UserDetail'
    import UserEdit from './components/props/UserEdit'

    export default {
        data() {
            return {
                name: 'Adam'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>