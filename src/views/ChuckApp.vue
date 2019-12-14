<template>
    <div class="container">
        <h1 class="mt-5">Chuck App</h1>
        <p>{{ joke }}</p>

        <select v-model="category">
            <option value=""></option>
            <option v-for="(category, index) in categories" :key="index" >{{ category }}</option>
        </select>
              
        <button @click="getNewJoke">Click for new joke!</button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import store from './../store'
export default {
    data() {
        return {
            category: ''
        }
    },
    computed:{
        ...mapGetters({
            joke: 'getJoke',
            categories: 'getCategory'
        }) 
    },
    beforeRouteEnter(to, from, next) {
        store.dispatch('fetchJoke').then(() => {
            next()
        })
        store.dispatch('fetchCategory').then(() => {
            next()
        })
    },
    methods: {
        getNewJoke() {
            store.dispatch('fetchJoke', this.category)
        }
    }
}
</script>