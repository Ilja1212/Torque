<template>
  <header class="header">
    <div class="container header-inner">
      <RouterLink to="/" class="logo">TORQUE</RouterLink>
      <nav>
        <RouterLink to="/">Articles</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #16181d;
  color: white;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

nav a {
  text-decoration: none;
}
</style>
