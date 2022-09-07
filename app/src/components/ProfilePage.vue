<template>
    <div>

        <UserCard msg="UserPage User Info"></UserCard>
    </div>
    <div>
        <!-- Loop through user-created scrolls here -->
        <ScrollCard msg="UserPage Scroll Test"></ScrollCard>
    </div>
</template>

<script>

import UserCard from "./UserCard.vue";
import ScrollCard from "./ScrollCard.vue";
export default {
    name: 'ProfilePage',
    components: {

        UserCard,
        ScrollCard
    },
    methods: {
        navigateItem() {
            this.$router.push('/profile')
        }
    }
}

</script>

<style>
</style>