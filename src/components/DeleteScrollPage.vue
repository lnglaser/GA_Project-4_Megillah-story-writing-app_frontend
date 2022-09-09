<template>
    <div>
        <!-- <ScrollCard msg="EditPage scroll test" :result="result">

        </ScrollCard> -->
    </div>
    <div>
        <p> Are you sure you want to delete this?</p>

        <button @click="deleteScroll">Confirm Delete</button>
    </div>
</template>

<script>
// import ScrollCard from "./ScrollCard.vue";
import axios from 'axios'
import { BASE_URL } from '@/globals';
// import ScrollCard from '../components/ScrollCard.vue'

export default {
    name: "DeleteScrollPage",
    // components: { ScrollCard },
    data() {
        return {
            scroll: {},
            scrollTitle: "Test",
            scrollBody: "Test"
        };
    },
    async created() {

        try {
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
        // handleFormChangeTitle(e) {
        //     this[e.target.name] = e.target.value;
        //     console.log(e.target.value);
        //     this.scrollTitle = e.target.value;
        // },
        // handleFormChangeBody(e) {
        //     this[e.target.name] = e.target.value;
        //     console.log(e.target.value);
        //     this.scrollBody = e.target.value;
        // },
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