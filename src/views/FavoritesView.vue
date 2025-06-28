<template>
  <div class="favorites">
    <h1>Mis Favoritos</h1>
    <div v-if="favorites.length > 0" class="favorites-grid">
      <div
        v-for="movie in favorites"
        :key="movie.id"
        class="favorite-card"
      >
        <router-link :to="`/pelicula/${movie.id}`">
          <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" />
          <h2>{{ movie.title }}</h2>
          <p>Estreno: {{ movie.release_date }}</p>
        </router-link>
        <button @click="removeFromFavorites(movie.id)" class="btn-remove">
          Eliminar de favoritos
        </button>
      </div>
    </div>
    <p v-else class="no-favorites">No hay películas en favoritos.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const favorites = ref([])

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`

const loadFavorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  favorites.value = storedFavorites
}

const removeFromFavorites = (id) => {
  const updatedFavorites = favorites.value.filter(movie => movie.id !== id)
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  favorites.value = updatedFavorites
}

onMounted(loadFavorites)
</script>