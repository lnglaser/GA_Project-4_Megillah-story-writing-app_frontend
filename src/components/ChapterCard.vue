<!-- This component will display the content of a single chapter-->
<template>
    <div class="chapter-card">
        <h3>{{ msg }}</h3>
        <div class="text-wrapper">
            <h3>{{ chapter }}</h3>
            <!-- <div>{{ chapter }}</div> -->

        </div>
        <div class="button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ChapterCard',
    props: {
        msg: String,
        chapter: {}
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