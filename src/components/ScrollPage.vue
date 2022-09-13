<!-- This page will render a scroll and all its chapters. -->
<template>
    <div>
        <!-- Show selected scroll content, and loop through chapter cards -->
        <!-- <ScrollCard msg="ScrollPage scroll test" :result="result"></ScrollCard> -->
        <div class="chapter-browser" :key="index" v-for="(result,index) in chapters">
            <ChapterCard msg="ScrollPage chapter test" :result="result"></ChapterCard>
        </div>
        <form class="new-chapter-form" @submit="addChapter">
            <h2>Add a chapter</h2>

            <textarea rows="10" cols="50" placeholder="Story text" :value="chapterBody"
                v-on:input="handleFormChangeBody" />
            <input type="submit" />
        </form>
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
            chapterBody: ""

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
    },
    methods: {
        handleFormChangeBody(e) {
            this[e.target.name] = e.target.value
            console.log(e.target.value)
            this.chapterBody = e.target.value

        },
        async addChapter() {
            // e.preventDefault()
            // alert('New scroll created')
            // this.title = ''
            // this.body = ''
            console.log(this.chapterBody)
            const res = await axios.post(`${BASE_URL}/chapters/users/7/scrolls/${this.$route.params.scroll_id}/create`, { body: this.chapterBody })
            console.log(res)


        }
    }
}

</script>

<style>

</style>