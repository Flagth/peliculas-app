import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetailView from '../views/MovieDetailView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import TopRatedView from '../views/TopRatedView.vue'
import PopularView from '../views/PopularView.vue'
import NewMoviesView from '../views/NewMoviesView.vue'

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
  },
  {
    path: '/mejor-calificadas',
    name: 'TopRated',
    component: TopRatedView
  },
  {
    path: '/populares',
    name: 'Popular',
    component: PopularView
  },
  {
    path: '/recientes',
    name: 'NewMovies',
    component: NewMoviesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
