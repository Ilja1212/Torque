import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import ManageArticlesView from '../views/ManageArticlesView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // :slug changes for each article, e.g. /article/change-your-own-oil
    { path: '/article/:slug', name: 'article', component: ArticleDetailView },
    { path: '/manage', name: 'manage', component: ManageArticlesView },
    // Any other address shows the 404 page
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
  // Start each new page at the top
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
