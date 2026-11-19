<script setup>
import { ref, computed } from 'vue'
import { useArticles } from '../stores/articleStore.js'
import ArticleCard from '../components/ArticleCard.vue'

const { articles, categories } = useArticles()

// These belong to this page only, not to the shared articles
const searchQuery = ref('')
const selectedCategory = ref('') // Empty string means all categories

const filteredArticles = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return articles.value.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.excerpt.toLowerCase().includes(query)
    const matchesCategory =
      selectedCategory.value === '' || item.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

function clearFilters() {
  searchQuery.value = ''
  selectedCategory.value = ''
}
</script>

<template>
  <h1 tabindex="-1">Car culture for drivers on a budget</h1>
  <p>Reviews, DIY guides and motorsport for young Irish drivers.</p>

  <h2>Find an article</h2>
  <div class="filters">
    <div>
      <label for="article-search">Search articles</label>
      <input id="article-search" v-model="searchQuery" type="search">
    </div>
    <div>
      <label for="article-category">Category</label>
      <select id="article-category" v-model="selectedCategory">
        <option value="">All categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <button type="button" class="secondary-button" @click="clearFilters">
      Clear filters
    </button>
  </div>

  <p role="status">
    {{ filteredArticles.length }} of {{ articles.length }} articles shown.
  </p>

  <p v-if="articles.length === 0" class="empty-state">
    No articles yet. Open Manage articles to add one.
  </p>
  <div v-else-if="filteredArticles.length" class="grid">
    <ArticleCard v-for="article in filteredArticles" :key="article.id" :article="article" />
  </div>
  <p v-else class="empty-state">
    No articles match. Change your search or clear the filters.
  </p>
</template>

<style scoped>
.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0 16px;
  align-items: end;
  margin-bottom: 1rem;
}

.filters button {
  justify-self: start;
}

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
