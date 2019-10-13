<template>
    <div class="hero is-danger">
        <div class="hero-body">
            <h1 class="title is-1">Team Members</h1>
            <ul>
                <li v-for="(tm, index) in teamMembers" class="box">
                    {{index + 1}}. {{tm.firstName}} {{tm.lastName}}
                    <br>
                    Age: {{tm.age}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                teamMembers: [
                    {
                        firstName: "Adam",
                        lastName: "Carter",
                        age: "43"
                    },
                    {
                        firstName: "Jimmi",
                        lastName: "Sharpe",
                        age: "30"
                    },
                    {
                        firstName: "Izzy",
                        lastName: "Lamb",
                        age: "31"
                    },
                ]
            }
        }
    }
</script>