<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p>Name: {{selectedTeamMember.FirstName}} {{selectedTeamMember.LastName}}</p>
            <p>Age: {{selectedTeamMember.Age}}</p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click.stop="hideModal"></button>
    </div>
</template>

<script>
    export default {
        props: ['selectedTeamMember']
    }
</script>