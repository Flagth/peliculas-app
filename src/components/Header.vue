<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">🎬 Appelis</router-link>

      <button class="hamburger" @click="toggleMenu">
        ☰
      </button>

      <nav :class="['nav', { open: menuOpen }]">
        <router-link to="/" class="nav-link" @click="closeMenu">Inicio</router-link>
        <router-link to="/favoritos" class="nav-link" @click="closeMenu">Favoritos</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>