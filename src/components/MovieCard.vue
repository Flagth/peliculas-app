<template>
  <div class="movie-card">
    <router-link :to="`/pelicula/${movie.id}`">
      <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" />
      <h3>{{ movie.title }}</h3>
      <p class="rating">⭐ {{ movie.vote_average.toFixed(1) }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  movie: Object
})

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`
</script>
