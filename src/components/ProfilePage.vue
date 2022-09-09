<template>
    <div>
        <UserCard msg="UserPage User Info"></UserCard>
    </div>
    <div>
        <!-- Loop through user-created scrolls here -->
        <div class="scroll-browser" :key="index" v-for="(result,index) in scrolls">
            <ScrollCard msg="UserPage scroll test" :result="result"></ScrollCard>
        </div>
    </div>
    <form class="new-scroll-form" @submit="addScroll">
        <h2>Start a new scroll</h2>
        <textarea :name="scrollTitle" rows="6" cols="10" placeholder="Title" :value="scrollTitle"
            v-on:input="handleFormChangeTitle" />
        <textarea rows="10" cols="50" placeholder="Story text" :value="scrollBody" v-on:input="handleFormChangeBody" />
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
            scrollTitle: "",
            scrollBody: ""
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
        handleFormChangeTitle(e) {
            this[e.target.name] = e.target.value
            console.log(e.target.value)
            this.scrollTitle = e.target.value

        },
        handleFormChangeBody(e) {
            this[e.target.name] = e.target.value
            console.log(e.target.value)
            this.scrollBody = e.target.value

        },
        async addScroll() {
            // e.preventDefault()
            // alert('New scroll created')
            // this.title = ''
            // this.body = ''
            console.log(this.scrollTitle)
            const res = await axios.post(`${BASE_URL}/scrolls/7/create`, { title: this.scrollTitle, body: this.scrollBody })
            console.log(res)


        }
    }
}

</script>

<style>
new-scroll-form {}
</style>