<template>
  <div class="movies-container">
    <h2>Películas Populares</h2>
    <section class="movie-grid">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue'

const API_KEY = '869fc71a84bd9cd648431c3a41f4f92b'
const movies = ref([])

const getPopularMovies = async () => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`)
    const data = await res.json()
    movies.value = data.results.filter(movie => movie.poster_path)
  } catch (error) {
    console.error('Error al obtener películas populares:', error)
  }
}

onMounted(getPopularMovies)
</script>
