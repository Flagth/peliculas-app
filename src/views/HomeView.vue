<template>
  <SearchBar @search="searchMovies" />
  <FilterBar @filter="filterByGenre" />
  <SearchResults v-if="searchResults.length > 0" :movies="searchResults" />
  <PopularMovies v-else-if="!filteredMovies.length" />
  <SearchResults v-else :movies="filteredMovies" />
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import FilterBar from '../components/FilterBar.vue'
import SearchResults from '../components/SearchResults.vue'
import PopularMovies from '../components/PopularMovies.vue'

const API_KEY = '869fc71a84bd9cd648431c3a41f4f92b'
const searchResults = ref([])
const filteredMovies = ref([])

const searchMovies = async (query) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}`)
  const data = await res.json()
  searchResults.value = data.results
}

const filterByGenre = async (genreId) => {
  if (!genreId) {
    filteredMovies.value = []
    return
  }
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreId}`)
    const data = await res.json()
    filteredMovies.value = data.results
  } catch (error) {
    console.error('Error al filtrar por género:', error)
  }
}
</script>