<script setup>
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()

// After changing page, move keyboard focus to the new page's heading
// so screen reader and keyboard users know the page changed.
watch(() => route.fullPath, async () => {
  await nextTick()
  document.querySelector('#main-content h1')?.focus()
})
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <AppHeader />

  <main id="main-content" class="container" tabindex="-1">
    <!-- The router puts the current page here -->
    <RouterView />
  </main>

  <AppFooter />
</template>
