<template>
    <div>
        <NavBar></NavBar>
        <UserCard></UserCard>
    </div>
    <div>
        <!-- Loop through user-created scrolls here -->
        <ScrollCard msg="UserPage Scroll Test"></ScrollCard>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import UserCard from "./UserCard.vue";
import ScrollCard from "./ScrollCard.vue";
export default {
    name: 'ProfilePage',
    components: {
        NavBar,
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