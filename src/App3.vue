<template>
    <div>
        <app-user></app-user>
    </div>
</template>

<script>
    import User from './components/props/User.vue'
    import UserDetail from './components/props/UserDetail.vue'
    import UserEdit from './components/props/UserEdit.vue'

    export default {
        data() {
            return {

            }
        },
        components: {
            appUser: User,
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>