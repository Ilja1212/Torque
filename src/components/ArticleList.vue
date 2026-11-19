<script setup>
defineProps({
  articles: { type: Array, required: true },
  editing: { type: Boolean, default: false },
})

// The list doesn't change anything itself. It tells the parent page
// which button was clicked, and the parent decides what to do.
const emit = defineEmits(['edit', 'remove'])
</script>

<template>
  <p v-if="articles.length === 0" class="empty-state">
    No articles yet. Add one using the form.
  </p>
  <ul v-else class="article-list">
    <li v-for="article in articles" :key="article.id" class="article-row">
      <div class="article-info">
        <strong>{{ article.title }}</strong>
        <small>{{ article.category }} · {{ article.date }}</small>
      </div>
      <button type="button" class="secondary-button"
              :disabled="editing" @click="emit('edit', article.id)">
        Edit
      </button>
      <button type="button" class="remove-button"
              :disabled="editing" @click="emit('remove', article.id)"
              :aria-label="'Delete ' + article.title">
        Delete
      </button>
    </li>
  </ul>
</template>

<style scoped>
.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid #dddddd;
}

.article-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.article-info small {
  color: #666666;
}

.article-row button {
  margin: 0;
}
</style>
