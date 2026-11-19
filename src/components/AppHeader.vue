<template>
  <header class="header">
    <div class="container header-inner">
      <RouterLink to="/" class="logo">TORQUE</RouterLink>
      <nav aria-label="Main navigation">
        <RouterLink to="/" exact-active-class="nav-current">Articles</RouterLink>
        <RouterLink to="/manage" exact-active-class="nav-current">Manage articles</RouterLink>
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
  flex-wrap: wrap; /* on small screens the nav drops under the logo */
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
}

nav a:hover,
nav a.nav-current {
  border-bottom-color: #e4572e;
}
</style>
