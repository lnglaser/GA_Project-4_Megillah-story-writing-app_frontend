<template>
    <div class="scroll-card">
        <h3>{{ msg }}</h3>
        <div class="text-wrapper">

            <h3>{{ result.id }}: {{ result.title }}</h3>
            <p>{{ result.body }}</p>
            <!-- <div>{{ scrollBody }}</div> -->

        </div>
        <div class="button-wrapper">
            <button @click="$router.push(`/scrolls/users/7/scrolls/${result.id}`)" :body="result.body"
                :title="result.title" :id="result.id">Edit</button>
            <!-- <router-link to="/scrolls/users/7/scrolls/:scroll_id">Edit</router-link> -->
            <button>View chapters</button>
            <button @click="$router.push(`/scrolls/users/7/scrolls/delete/${result.id}`)" :body="result.body"
                :title="result.title" :id="result.id">Delete</button>
        </div>

    </div>
</template>

<script>

// import axios from 'axios';
// import { BASE_URL } from '@/globals';
export default {
    name: 'ScrollCard',
    props: {
        msg: String,
        result: {}
    },
    // data: () => ({
    //     scrollBody: '',
    //     scrollTitle: '',
    //     heading: "This should be a scroll"
    // })
    methods: {

        // deleteScroll(id) {
        //     axios.delete(`${BASE_URL}/users/7/scrolls/${result.id}`)
        // }
    }
}
</script>

<style>

</style>