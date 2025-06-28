<template>
  <div class="favorites">
    <h1>Mis Favoritos</h1>
    <div v-if="favorites.length > 0" class="favorites-grid">
      <router-link
        v-for="movie in favorites"
        :key="movie.id"
        :to="`/pelicula/${movie.id}`"
        class="favorite-card"
      >
        <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" />
        <h2>{{ movie.title }}</h2>
        <p>Estreno: {{ movie.release_date }}</p>
      </router-link>
    </div>
    <p v-else class="no-favorites">No hay películas en favoritos.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const favorites = ref([])

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`

onMounted(() => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  favorites.value = storedFavorites
})
</script>