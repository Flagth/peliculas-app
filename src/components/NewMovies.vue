<template>
  <div class="movies-container">
    <h2>Películas Recientes</h2>
    <section class="movie-grid">
      <MovieCard
        v-for="movie in movies.slice(0, 6)"
        :key="movie.id"
        :movie="movie"
      />
    </section>
    <router-link to="/recientes" class="btn-see-more">
      Ver más
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from './MovieCard.vue'

const API_KEY = '869fc71a84bd9cd648431c3a41f4f92b'
const movies = ref([])

const getNewMovies = async () => {
  try {
    const today = new Date().toISOString().split('T')[0]
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=release_date.desc&release_date.lte=${today}&include_adult=false&page=1`)
    const data = await res.json()
    movies.value = data.results.filter(movie => movie.poster_path)
  } catch (error) {
    console.error('Error al obtener películas recientes:', error)
  }
}

onMounted(getNewMovies)
</script>
