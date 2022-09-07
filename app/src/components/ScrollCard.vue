<template>
    <div class="scroll-card">
        <h3>{{ msg }}</h3>
        <div class="text-wrapper">
            <h3>{{ heading }}</h3>
            <div>{{ chapter }}</div>

        </div>
        <div class="button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ScrollCard',
    props: {
        msg: String,
        scroll: {}
    },
    data: () => ({
        scrolls: null,
        heading: "This should be a scroll"
    })
}
</script>

<style>
</style>