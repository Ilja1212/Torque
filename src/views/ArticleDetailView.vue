<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticles } from '../stores/articleStore.js'

const route = useRoute()
const { articles } = useArticles()

// computed so the lookup runs again if the address or the articles change
const article = computed(() =>
  articles.value.find(item => item.slug === route.params.slug)
)
</script>

<template>
  <div v-if="article" class="article">
    <RouterLink to="/">← Back to all articles</RouterLink>

    <p class="category">{{ article.category }}</p>
    <h1 tabindex="-1">{{ article.title }}</h1>
    <p class="meta">By {{ article.author }} · {{ article.date }}</p>

    <div class="image-placeholder">{{ article.category }}</div>

    <p v-for="(paragraph, index) in article.body" :key="index">{{ paragraph }}</p>
  </div>

  <div v-else>
    <h1 tabindex="-1">Article not found</h1>
    <p>This article may have been deleted or the link is wrong.</p>
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
