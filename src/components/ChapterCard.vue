<!-- This component will display the content of a single chapter-->
<template>
    <div class="chapter-card">
        <h3>{{ msg }}</h3>
        <div class="text-wrapper">
            <h3>{{ result.scrollId }}</h3>
            <p>{{ result.body }}</p>
            <!-- <div>{{ chapter }}</div> -->

        </div>
        <div class="button-wrapper">
            <button @click="$router.push(`/chapters/${result.id}/edit`)" :body="result.body"
                :id="result.id">Edit</button>
            <button @click=" $router.push(`/chapters/users/7/chapters/${result.id}/delete`)" :body="result.body"
                :id="result.id">Delete</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ChapterCard',
    props: {
        msg: String,
        result: {}
    },
    // data: () => ({
    //     chapters: null,
    //     heading: 'This should be a chapter'
    // }),
    methods: {}
}
</script>

<style>
chapter-card {
    border: solid 2px black;
    border-radius: 5px;
}
</style>