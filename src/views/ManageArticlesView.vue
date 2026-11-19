<script setup>
import { ref } from 'vue'
import ArticleList from '../components/ArticleList.vue'
import { useArticles } from '../stores/articleStore.js'

const { articles, categories, saveArticle, removeArticle } = useArticles()

// Form drafts belong to this page only.
// The real article only changes when saveArticle() runs.
const editingId = ref(null)
const newTitle = ref('')
const newCategory = ref('Reviews')
const newAuthor = ref('')
const newExcerpt = ref('')
const newBody = ref('')
const errorMessage = ref('')
const statusMessage = ref('')

function startEditing(id) {
  const article = articles.value.find(item => item.id === id)
  if (!article) return
  editingId.value = id
  newTitle.value = article.title
  newCategory.value = article.category
  newAuthor.value = article.author
  newExcerpt.value = article.excerpt
  newBody.value = article.body.join('\n') // one paragraph per line
  errorMessage.value = ''
  statusMessage.value = ''
}

function resetForm() {
  editingId.value = null
  newTitle.value = ''
  newCategory.value = 'Reviews'
  newAuthor.value = ''
  newExcerpt.value = ''
  newBody.value = ''
  errorMessage.value = ''
}

function submitArticle() {
  const wasEditing = editingId.value !== null
  const error = saveArticle(
    editingId.value,
    newTitle.value,
    newCategory.value,
    newAuthor.value,
    newExcerpt.value,
    newBody.value
  )
  if (error) {
    errorMessage.value = error
    statusMessage.value = ''
    return
  }
  resetForm()
  statusMessage.value = wasEditing ? 'Changes saved.' : 'Article added.'
}

function cancelEditing() {
  resetForm()
  statusMessage.value = 'Edit cancelled. Saved article unchanged.'
}

function deleteArticle(id) {
  removeArticle(id)
  statusMessage.value = 'Article deleted.'
}
</script>

<template>
  <h1 tabindex="-1">Manage articles</h1>
  <p class="note">Changes are kept until you refresh the page.</p>
  <p role="status">{{ statusMessage }}</p>

  <div class="manage-grid">
    <section class="panel">
      <h2>{{ editingId === null ? 'Add an article' : 'Edit article' }}</h2>
      <form @submit.prevent="submitArticle">
        <label for="article-title">Title</label>
        <input id="article-title" v-model="newTitle" type="text" maxlength="100" required>

        <label for="article-category">Category</label>
        <select id="article-category" v-model="newCategory">
          <option v-for="category in categories" :key="category">{{ category }}</option>
        </select>

        <label for="article-author">Author</label>
        <input id="article-author" v-model="newAuthor" type="text" required>

        <label for="article-excerpt">Excerpt (short summary for the card)</label>
        <textarea id="article-excerpt" v-model="newExcerpt" rows="2" maxlength="200" required></textarea>

        <label for="article-body">Article text (one paragraph per line)</label>
        <textarea id="article-body" v-model="newBody" rows="8" required></textarea>

        <button type="submit" class="primary-button">
          {{ editingId === null ? 'Add article' : 'Save changes' }}
        </button>
        <button v-if="editingId !== null" type="button"
                class="secondary-button" @click="cancelEditing">
          Cancel
        </button>

        <p v-if="errorMessage" role="alert" class="error-message">
          {{ errorMessage }}
        </p>
      </form>
    </section>

    <section class="panel">
      <h2>All articles ({{ articles.length }})</h2>
      <ArticleList :articles="articles" :editing="editingId !== null"
                   @edit="startEditing" @remove="deleteArticle" />
    </section>
  </div>
</template>

<style scoped>
.note {
  color: #666666;
}

.manage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  align-items: start;
}

.panel {
  background: white;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 1rem 1.5rem 1.5rem;
}
</style>
