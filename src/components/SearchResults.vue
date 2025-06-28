<template>
  <section v-if="movies.length > 0" class="movie-grid">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </section>
  <p v-else>No se encontraron resultados.</p>
</template>

<script setup>
import { defineProps } from 'vue'
import MovieCard from './MovieCard.vue'

const props = defineProps({
  movies: Array
})
</script>
