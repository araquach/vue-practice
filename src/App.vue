<template>
    <div>
        <home-component v-if="!homeInfo"></home-component>
        <home-info-component v-if="homeInfo"></home-info-component>

        <about-component v-if="!aboutInfo"></about-component>
        <about-info-component v-if="aboutInfo"></about-info-component>

        <team-component v-if="!teamInfo"></team-component>
        <team-info-component v-if="teamInfo"></team-info-component>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                homeInfo : false,
                aboutInfo : false,
                teamInfo : true
            }
        }
    }
</script>