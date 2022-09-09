<!-- This page will show all scrolls -->
<template>
    <div>
        <div class="scroll-browser" :key="index" v-for="(result,index) in scrolls">
            <ScrollCard msg="UserPage scroll test" :result="result"></ScrollCard>
        </div>



    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import ScrollCard from '../components/ScrollCard.vue'




export default {
    name: "BrowseScrolls",
    components: {
        ScrollCard,


    },
    async created() {
        try {
            const res = await axios.get(`${BASE_URL}/scrolls`)
            this.scrolls = res.data
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    },
}

</script>

<style>
</style>