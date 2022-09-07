<template>
    <h1>Here's the home page</h1>
    <div>
        <ScrollCard>Test ScrollCard</ScrollCard>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    components: { ScrollCard }
}
import axios from 'axios'
import { BASE_URL } from '../globals'
import ScrollCard from '../components/ScrollCard.vue'

</script>

<style>
</style>