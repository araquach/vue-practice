<template>
    <div id="team" class="hero is-danger">
        <div class="hero-body">
            <b-modal :active.sync="isComponentModalActive">
                <TeamDetail :selectedTM="selectedTM"/>
            </b-modal>
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
                isComponentModalActive: false,
                TeamMembers: [
                    {
                        Id: 1,
                        FirstName: "Lucy",
                        LastName:"Watson",
                        Image: "/dist/images/lucy.jpg",
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
                        Image: "/dist/images/lauren_w.jpg",
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
                        Image: "/dist/images/david.jpg",
                        LastName: "Randles",
                        Level: "Graduate",
                        Para1: "David is the latest addition to the team",
                        Para2: "He's a great stylist",
                        Para3: "Get booked in now!",
                        Price: "60",
                        Product: "Oil Miracle",
                        Style: "Short, choppy looks"
                    },
                    {
                        FirstName: "Abi",
                        Id: 4,
                        Image: "/dist/images/abi.jpg",
                        LastName: "Clarke",
                        Level: "Graduate",
                        Para1: "Abi is with us from PK",
                        Para2: "She's a memnber of the GHD style squad",
                        Para3: "She will be back to PK soon",
                        Price: "90",
                        Product: "Smooth Again",
                        Style: "Luscious waves"
                    },
                    {
                        FirstName: "Lauren",
                        Id: 5,
                        Image: "/dist/images/lauren_t.jpg",
                        LastName: "Thompson",
                        Level: "Graduate",
                        Para1: "Lauren is temporarily with us from Jakata",
                        Para2: "She made the wise choice of coming to us after being at Johnsons",
                        Para3: "She's a great asset to the team",
                        Price: "60",
                        Product: "Flex Wax",
                        Style: "Short, bold styles"
                    }
                ]
            }
        },

        methods: {
            showTM(tm) {
                this.selectedTM = tm, this.isComponentModalActive = true
            }
        }
    }
</script>