<template>
  <SearchBar @search="searchMovies" />
  <SearchResults v-if="searchResults.length > 0" :movies="searchResults" />
  <PopularMovies v-else />
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import SearchResults from '../components/SearchResults.vue'
import PopularMovies from '../components/PopularMovies.vue'

const API_KEY = '869fc71a84bd9cd648431c3a41f4f92b'
const searchResults = ref([])

const searchMovies = async (query) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}`)
  const data = await res.json()
  searchResults.value = data.results
}
</script>