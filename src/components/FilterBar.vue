<template>
  <div class="filter-bar">
    <label for="genre">Filtrar por género:</label>
    <select id="genre" v-model="selectedGenre">
      <option value="">-- Todos los géneros --</option>
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">
        {{ genre.name }}
      </option>
    </select>
    <button @click="emitFilter">Aplicar filtro</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['filter'])
const API_KEY = '869fc71a84bd9cd648431c3a41f4f92b'
const genres = ref([])
const selectedGenre = ref('')

const emitFilter = () => {
  emit('filter', selectedGenre.value)
}

onMounted(async () => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`)
    const data = await res.json()
    genres.value = data.genres
  } catch (error) {
    console.error('Error al obtener géneros:', error)
  }
})
</script>