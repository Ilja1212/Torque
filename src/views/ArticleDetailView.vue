<script setup>
import { useRoute } from 'vue-router'
import { articles } from '../data/articles.js'

// Read the slug from the address bar, e.g. /article/change-your-own-oil
const route = useRoute()

// Find the article whose slug matches
const article = articles.find((a) => a.slug === route.params.slug)
</script>

<template>
  <!-- Show the article if we found one -->
  <div v-if="article" class="article">
    <RouterLink to="/">← Back to all articles</RouterLink>

    <p class="category">{{ article.category }}</p>
    <h1>{{ article.title }}</h1>
    <p class="meta">By {{ article.author }} · {{ article.date }}</p>

    <div class="image-placeholder">{{ article.category }}</div>

    <p v-for="paragraph in article.body" :key="paragraph">{{ paragraph }}</p>
  </div>

  <!-- Otherwise show a message -->
  <div v-else>
    <h1>Article not found</h1>
    <RouterLink to="/">Back to all articles</RouterLink>
  </div>
</template>

<style scoped>
.article {
  max-width: 700px;
  margin: 0 auto;
}

.category {
  color: #e4572e;
  font-weight: bold;
  text-transform: uppercase;
}

.meta {
  color: #666666;
}

.image-placeholder {
  background: #e4572e;
  color: white;
  height: 250px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
