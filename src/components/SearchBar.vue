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
import { ref } from 'vue'
const emit = defineEmits(['search'])
const query = ref('')

const emitSearch = () => {
  if (query.value.trim() !== '') {
    emit('search', query.value.trim())
  }
}
</script>