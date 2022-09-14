<template>
    <div>
        <!-- <ScrollCard msg="EditPage scroll test" :result="result">

        </ScrollCard> -->
    </div>
    <div>
        <form class="new-chapter-form" @submit.prevent="editChapter">
            <h2>Edit Chapter</h2>

            <textarea rows="10" cols="50" placeholder="Story text" :value="chapterBody"
                v-on:input="handleFormChangeBody" />
            <input type="submit" />
        </form>
    </div>
</template>

<script>

import axios from 'axios'
import { BASE_URL } from '@/globals';


export default {
    name: "EditChapterPage",

    data() {
        return {
            chapter: {},
            chapterBody: ""
        };
    },
    async created() {

        try {
            const res = await axios.get(`${BASE_URL}/chapters/${this.$route.params.chapter_id}`);
            this.chapter = res.data;


        }
        catch (error) {
            console.log(error);
        }
    },
    // async created() {
    //     try {
    //         const res = await axios.get(`${BASE_URL}/scrolls/users/7/scrolls`)
    //         this.scrolls = res.data
    //         console.log(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
    methods: {

        handleFormChangeBody(e) {
            this[e.target.name] = e.target.value;
            console.log(e.target.value);
            this.chapterBody = e.target.value;
        },
        async editChapter() {

            console.log(this.chapterBody);

            const res = await axios.put(`${BASE_URL}/chapters/users/7/chapters/${this.$route.params.chapter_id}`, { body: this.chapterBody })
            console.log(res)
        }
    },

}

</script>

<style>

</style>