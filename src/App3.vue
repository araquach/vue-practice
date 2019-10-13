<template>
    <div>
        <app-user :name="name"/>

        <app-user-detail/>
    </div>
</template>

<script>
    import User from './components/props/User.vue'
    import UserDetail from './components/props/UserDetail.vue'
    import UserEdit from './components/props/UserEdit.vue'

    export default {
        data() {
            return {
                name: "Adam"
            }
        },
        components: {
            appUser: User,
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>