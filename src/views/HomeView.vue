<script setup>
import { articles } from '../data/articles.js'
import ArticleCard from '../components/ArticleCard.vue'
</script>

<template>
  <h1>Car culture for drivers on a budget</h1>
  <p>Reviews, DIY guides and motorsport for young Irish drivers.</p>

  <div class="grid">
    <!-- Make one ArticleCard for each article -->
    <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Tablet: 2 columns */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Phone: 1 column */
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
