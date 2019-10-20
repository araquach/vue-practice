<template>
    <div class="hero is-danger">
        <div class="hero-body">
            <TeamDetail :selectedTM="selectedTM"/>
            <TeamList :TeamMembers="TeamMembers" @emitTM="showTM"/>
        </div>
    </div>
</template>

<script>
    import TeamList from "./TeamList";
    import TeamDetail from "./TeamDetail";

    export default {
        components: {TeamList, TeamDetail},

        data() {
            return {
                selectedTM: '',
                TeamMembers: [
                    {
                        Id: 1,
                        FirstName: "Lucy",
                        LastName:"Watson",
                        Image: "/dist/img/team/lucy.jpg",
                        Level:"Junior Stylist",
                        Para1:"Lucy is a great stylist",
                        Para2:"She's in her second year",
                        Para3:"Get Booked in with her!",
                        Price:"50",
                        Product:"Mess Up,",
                        Style:"Bobs"
                    },
                    {
                        FirstName: "Lauren",
                        Id: 2,
                        Image: "/dist/img/team/lauren_w.jpg",
                        LastName: "Watson",
                        Level: "Junior Stylist",
                        Para1: "Lauren is an asset to the team ",
                        Para2: "She's been hairdressing a while",
                        Para3: "She's eager to build her client base",
                        Price: "50",
                        Product: "Dust It",
                        Style: "Long, textured looks"

                    },
                    {
                        FirstName: "David",
                        Id: 3,
                        Image: "/dist/img/team/david.jpg",
                        LastName: "Randles",
                        Level: "Graduate",
                        Para1: "David is the latest addition to the team",
                        Para2: "He's a great stylist",
                        Para3: "Get booked in now!",
                        Price: "60",
                        Product: "Oil Miracle",
                        Style: "Short, choppy looks"
                    }
                ]
            }
        },

        methods: {
            showTM(tm) {
                this.selectedTM = tm
            }
        }
    }
</script>