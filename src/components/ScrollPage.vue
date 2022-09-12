<!-- This page will render a scroll and all its chapters. -->
<template>
    <div>
        <!-- Show selected scroll content, and loop through chapter cards -->
        <ScrollCard :result="result"></ScrollCard>
        <ChapterCard></ChapterCard>
    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import ScrollCard from "./ScrollCard.vue";
import ChapterCard from "./ChapterCard.vue";


export default {
    name: "ScrollPage",
    components: { ScrollCard, ChapterCard },

    async created() {
        try {
            const res = await axios.get(`${BASE_URL}/chapters/scrolls/${this.$route.params.scroll_id}`)
            this.scrolls = res.data
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
}

</script>

<style>

</style>