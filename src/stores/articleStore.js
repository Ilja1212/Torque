import { ref, readonly } from 'vue'
import { articles as initialArticles, categories } from '../data/articles.js'

// Created once, when the file first loads. Every page shares this list.
const articles = ref(initialArticles.map(item => ({ ...item })))

let nextId = Math.max(0, ...articles.value.map(item => item.id)) + 1

// 'How to Change Your Oil!' -> 'how-to-change-your-oil'
function makeSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// The body is typed into a textarea. Each line becomes a paragraph.
function textToParagraphs(text) {
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')
}

// Returns an error message, or '' when the save worked.
// id is null when adding a new article.
function saveArticle(id, rawTitle, rawCategory, rawAuthor, rawExcerpt, rawBody) {
  const title = rawTitle.trim()
  const category = rawCategory.trim()
  const author = rawAuthor.trim()
  const excerpt = rawExcerpt.trim()
  const body = textToParagraphs(rawBody)

  if (!title) return 'Please enter a title.'
  if (title.length > 100) return 'Use no more than 100 characters for the title.'
  if (!categories.includes(category)) return 'Choose a category.'
  if (!author) return 'Please enter an author.'
  if (!excerpt) return 'Please enter a short excerpt.'
  if (excerpt.length > 200) return 'Use no more than 200 characters for the excerpt.'
  if (body.length === 0) return 'Please write the article text.'

  if (id === null) {
    let slug = makeSlug(title)
    // Two articles can't share an address, so add the id if the slug is taken
    if (articles.value.some(item => item.slug === slug)) {
      slug = slug + '-' + nextId
    }

    articles.value.push({
      id: nextId++,
      slug,
      title,
      category,
      author,
      date: new Date().toISOString().slice(0, 10), // today, e.g. '2026-11-18'
      excerpt,
      body,
    })
  } else {
    const article = articles.value.find(item => item.id === id)
    if (!article) return 'This article is no longer available.'
    // The slug stays the same when editing, so old links still work
    article.title = title
    article.category = category
    article.author = author
    article.excerpt = excerpt
    article.body = body
  }
  return ''
}

function removeArticle(id) {
  articles.value = articles.value.filter(item => item.id !== id)
}

// This single object is shared by every page that calls useArticles()
const store = {
  articles: readonly(articles),
  categories,
  saveArticle,
  removeArticle,
}

export function useArticles() {
  return store
}
