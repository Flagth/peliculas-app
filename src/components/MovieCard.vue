<template>
  <router-link :to="`/pelicula/${movie.id}`" class="movie-card">
    <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" />
    <div>
      <h2>{{ movie.title }}</h2>
      <p>Estreno: {{ movie.release_date }}</p>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  movie: Object
})

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`
</script>
