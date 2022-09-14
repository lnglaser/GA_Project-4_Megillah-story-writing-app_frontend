<template>
    <div>

    </div>
    <div>
        <p> Are you sure you want to delete this chapter?</p>

        <button @click="deleteChapter">Confirm Delete</button>
    </div>
</template>

<script>

import axios from 'axios'
import { BASE_URL } from '@/globals';


export default {
    name: "DeleteChapterPage",

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
            console.log(res.data)
        }
        catch (error) {
            console.log(error);
        }
    },

    methods: {

        async deleteChapter() {
            console.log(this.chapterBody);

            const res = await axios.delete(`${BASE_URL}/chapters/users/7/chapters/${this.$route.params.chapter_id}`, { body: this.chapterBody })
            console.log(res)
        }
    },

}

</script>

<style>

</style>