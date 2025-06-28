<template>
  <div v-if="movie" class="movie-detail">
    <div class="movie-detail-container">
      <img :src="getImageUrl(movie.poster_path)" class="poster" />
      <div>
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.overview }}</p>
        <ul>
          <li><strong>Estreno:</strong> {{ movie.release_date }}</li>
          <li><strong>Duración:</strong> {{ movie.runtime }} minutos</li>
          <li><strong>Géneros:</strong> {{ movie.genres.map(g => g.name).join(', ') }}</li>
          <li><strong>Promedio de votos:</strong> {{ movie.vote_average }}</li>
        </ul>
        <button @click="addToFavorites" class="btn-fav">Agregar a favoritos</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const API_KEY = '869fc71a84bd9cd648431c3a41f4f92b'
const route = useRoute()
const movie = ref(null)

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`

onMounted(async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${API_KEY}&language=es-ES`)
  const data = await res.json()
  movie.value = data
})

const addToFavorites = () => {
  if (!movie.value) return
  const existingFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  const isAlreadyFavorite = existingFavorites.some(fav => fav.id === movie.value.id)
  if (!isAlreadyFavorite) {
    existingFavorites.push({
      id: movie.value.id,
      title: movie.value.title,
      poster_path: movie.value.poster_path,
      release_date: movie.value.release_date
    })
    localStorage.setItem('favorites', JSON.stringify(existingFavorites))
    alert('Película agregada a favoritos ✅')
  } else {
    alert('La película ya está en favoritos ⚠️')
  }
}
</script>