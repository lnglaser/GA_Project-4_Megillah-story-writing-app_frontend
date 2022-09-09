<template>
    <h1>Here's a Nav Bar</h1>
    <nav>
        <form><input type="text" placeholder="Search scrolls" /></form>
        <router-link to="/" name="HomePage">Home</router-link>
        <router-link to="/browse" name="Browse">Browse</router-link>
        <router-link to="/profile" name="Profile">Profile</router-link>
    </nav>
</template>


<script>
export default {
    name: 'NavBar'
}

// import axios from 'axios'
// import ScrollCard from '../components/ScrollCard.vue'
</script>


<style>
nav {
    display: flex;
    align-items: center;
}

router-link {
    padding: 1em;
}
</style>