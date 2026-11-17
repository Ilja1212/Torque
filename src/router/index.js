import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  // :slug changes for each article, e.g. /article/change-your-own-oil
  { path: '/article/:slug', component: ArticleDetailView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
