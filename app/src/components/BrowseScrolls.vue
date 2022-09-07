<!-- This page will show all scrolls -->
<template>
    <div>
        <ScrollCard></ScrollCard>
        <ChapterCard></ChapterCard>


    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import ScrollCard from '../components/ScrollCard.vue'
import ChapterCard from './ChapterCard.vue'



export default {
    name: "BrowseScrolls",
    components: {
        ScrollCard,
        ChapterCard,

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