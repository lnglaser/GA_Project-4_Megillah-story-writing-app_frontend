<template>
    <div>
        <UserCard msg="UserPage User Info"></UserCard>
    </div>
    <div>
        <!-- Loop through user-created scrolls here -->
        <div class="scroll-browser" :key="index" v-for="(result,index) in scrolls">
            <ScrollCard msg="UserPage scroll test" :result="result.title"></ScrollCard>
        </div>
    </div>
    <form class="new-scroll-form" @submit="newScroll">
        <h2>Start a new scroll</h2>
        <textarea rows="6" cols="10" placeholder="Title" value="title" />
        <textarea rows="10" cols="50" placeholder="Story text" value="body" />
        <input type="submit" />
    </form>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '@/globals';
import UserCard from "./UserCard.vue";
import ScrollCard from "./ScrollCard.vue";
export default {
    name: 'ProfilePage',
    components: {

        UserCard,
        ScrollCard
    },
    data() {
        return {
            scrolls: [],
        };
    },
    async created() {
        try {
            const res = await axios.get(`${BASE_URL}/scrolls/users/7`)
            this.scrolls = res.data
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        newScroll(e) {
            e.preventDefault()
            alert('New scroll created')
            this.title = ''
            this.body = ''
        }
    }
}

</script>

<style>
new-scroll-form {}
</style>