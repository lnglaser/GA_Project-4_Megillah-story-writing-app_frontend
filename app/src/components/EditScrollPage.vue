<template>
    <div>
        <form class="new-scroll-form" @submit="editScroll">
            <h2>Edit Scroll</h2>
            <textarea :name="scrollTitle" rows="6" cols="10" placeholder="Title" :value="scrollTitle"
                v-on:input="handleFormChangeTitle" />
            <textarea rows="10" cols="50" placeholder="Story text" :value="scrollBody"
                v-on:input="handleFormChangeBody" />
            <input type="submit" />
        </form>
    </div>
</template>

<script>
// import ScrollCard from "./ScrollCard.vue";
</script>

<style>
</style>