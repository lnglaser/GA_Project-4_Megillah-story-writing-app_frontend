<template>
    <h1>Home</h1>
    <div class="scroll-browser" :key="index" v-for="(result,index) in scrolls">
        <ScrollCard :result="result"></ScrollCard>
    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import ScrollCard from '../components/ScrollCard.vue'

export default {
    name: "HomePage",
    components: { ScrollCard },
    data() {
        return {
            scrolls: [],
        };
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
    methods: {

    }
}



</script>

<style>

</style>