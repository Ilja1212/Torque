<script setup>
// The card gets ONE article from whichever page uses it
defineProps({
  article: Object,
})
</script>

<template>
  <article class="card">
    <!-- Grey box instead of a real photo -->
    <div class="image-placeholder">{{ article.category }}</div>

    <p class="category">{{ article.category }}</p>
    <h3>
      <RouterLink :to="'/article/' + article.slug">{{ article.title }}</RouterLink>
    </h3>
    <p>{{ article.excerpt }}</p>
  </article>
</template>

<style scoped>
.card {
  background: white;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 1rem;
}

.image-placeholder {
  background: #e4572e;
  color: white;
  height: 150px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.category {
  color: #e4572e;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 0;
}

h3 a {
  text-decoration: none;
}
</style>
