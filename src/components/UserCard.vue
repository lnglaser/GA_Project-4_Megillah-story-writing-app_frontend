<template>
    <div class="user-card">
        <h3>{{ msg }}</h3>
        <div class="text-wrapper">
            <h3>{{ user }}</h3>
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
    name: 'userCard',
    props: {
        msg: String,
        user: {}
    },
    // data: () => ({
    //     users: null,
    //     heading: 'This should be a user'
    // }),
    methods: {}
}
</script>

<style>
</style>