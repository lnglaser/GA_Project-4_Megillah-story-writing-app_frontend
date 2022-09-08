<template>
    <div class="scroll-card" @click="displayScroll(scroll.id)">
        <h3>{{ msg }}</h3>
        <div class="text-wrapper">
            <h3>{{ result }}</h3>
            <!-- <div>{{ scrollBody }}</div> -->

        </div>
        <div class="button-wrapper">
            <button @click="$router.push(`/scrolls/users/7/scrolls/${id}`)">Edit</button>
            <!-- <router-link to="/scrolls/users/7/scrolls/:scroll_id">Edit</router-link> -->
            <button>Add Chapter</button>
            <button>Delete</button>
        </div>

    </div>
</template>

<script>
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
        displayScroll(id) {
            this.$router.push(`/scroll/${id}`)

        }
    }
}
</script>

<style>
</style>