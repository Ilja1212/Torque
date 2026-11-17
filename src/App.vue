<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main class="container">
    <!-- The router puts the current page here -->
    <RouterView />
  </main>

  <AppFooter />
</template>
