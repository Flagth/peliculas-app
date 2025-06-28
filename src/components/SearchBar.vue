<template>
  <div class="search-bar">
    <input
      v-model="query"
      type="text"
      placeholder="Buscar películas..."
      @keyup.enter="emitSearch"
    />
    <button @click="emitSearch">Buscar</button>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
const emit = defineEmits(['search'])
const query = ref('')

const emitSearch = () => {
  if (query.value.trim() !== '') {
    emit('search', query.value.trim())
  }
}

// Método para limpiar la búsqueda desde el padre
const clearSearch = () => {
  query.value = ''
}

defineExpose({ clearSearch })
</script>
