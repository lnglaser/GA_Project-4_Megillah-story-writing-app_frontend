<!-- This page will render a scroll and all its chapters. -->
<template>
    <div>
        <!-- Show selected scroll content, and loop through chapter cards -->
        <ScrollCard></ScrollCard>
        <ChapterCard></ChapterCard>
    </div>
</template>

<script>
import ScrollCard from "./ScrollCard.vue";
import ChapterCard from "./ChapterCard.vue";


export default {
    name: "ScrollPage",
    components: { ScrollCard, ChapterCard }
}

</script>

<style>

</style>