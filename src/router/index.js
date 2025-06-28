import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetailView from '../views/MovieDetailView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/pelicula/:id',
    name: 'MovieDetail',
    component: MovieDetailView,
    props: true
  },
  {
    path: '/favoritos',
    name: 'Favorites',
    component: FavoritesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
