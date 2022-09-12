<!-- This page will render a scroll and all its chapters. -->
<template>
    <div>
        <!-- Show selected scroll content, and loop through chapter cards -->
        <ScrollCard msg="ScrollPage scroll test" :result="result"></ScrollCard>
        <div class="chapter-browser" :key="index" v-for="(result,index) in chapters">
            <ChapterCard msg="ScrollPage chapter test" :result="result"></ChapterCard>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
// import ScrollCard from "./ScrollCard.vue";
import ChapterCard from "./ChapterCard.vue";


export default {
    name: "ScrollPage",
    components: { ChapterCard },
    data() {
        return {
            chapters: [],

        };
    },
    async created() {
        try {
            // const res2 = await axios.get(`${BASE_URL}/scrolls/${this.$route.params.scroll_id}`)
            const res = await axios.get(`${BASE_URL}/chapters/scrolls/${this.$route.params.scroll_id}`)
            this.chapters = res.data
            // this.scroll = res2.data
            console.log(res.data)
            // console.log(res2.data)
        } catch (error) {
            console.log(error)
        }
    }
}

</script>

<style>

</style>