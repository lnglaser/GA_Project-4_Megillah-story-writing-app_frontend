<template>
  <div id=app>
    <NavBar></NavBar>
    <ScrollCard msg="ScrollCard Test"></ScrollCard>
    <ChapterCard msg="ChapterCard Test"></ChapterCard>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios';
import NavBar from './components/NavBar.vue';
import ScrollCard from './components/ScrollCard.vue'
import ChapterCard from './components/ChapterCard.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBar,
    ScrollCard,
    ChapterCard,
  },
  data: () => ({
    chapters: null,

  }),
  methods: {
    showChapters() {
      this.chapters = "test chapter state"
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>