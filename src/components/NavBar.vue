<template>
    <h1>Megillah</h1>
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

input {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
}

button {
    background-color: black;
    color: white;
    padding: 15px 30px;
}

router-link {
    padding: 1em;
}
</style>