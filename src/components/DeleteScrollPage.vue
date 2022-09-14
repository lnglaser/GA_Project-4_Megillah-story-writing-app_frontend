<template>
    <div>

    </div>
    <div>
        <p> Are you sure you want to delete this?</p>

        <button @click="deleteScroll">Confirm Delete</button>
    </div>
</template>

<script>

import axios from 'axios'
import { BASE_URL } from '@/globals';

export default {
    name: "DeleteScrollPage",

    data() {
        return {
            scroll: {},
            scrollTitle: "Test",
            scrollBody: "Test"
        };
    },
    async created() {

        try {
            // const res = await axios.get(`${BASE_URL}/scrolls/users/7/scrolls/${this.$route.params.scroll_id}`);
            const res = await axios.get(`${BASE_URL}/scrolls/${this.$route.params.scroll_id}`);
            this.scroll = res.data;


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
        // 
        async deleteScroll() {
            console.log(this.scrollTitle);
            console.log(this.scrollBody);
            console.log(this.$route.params.scroll_id)

            const res = await axios.delete(`${BASE_URL}/scrolls/users/7/scrolls/${this.$route.params.scroll_id}`, { title: this.scrollTitle, body: this.scrollBody })
            console.log(res)
        }
    },

}

</script>

<style>

</style>