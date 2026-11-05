<script setup>
const currentYear = new Date().getFullYear()
const appName = import.meta.env.VITE_APP_NAME || 'Vue Starter'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-wrap">
      <p>© {{ currentYear }} {{ appName }}. Dibuat dengan Vue.js.</p>
      <div class="footer-links">
        <RouterLink to="/tentang">Tentang</RouterLink>
        <a href="https://vuejs.org" target="_blank" rel="noreferrer">Dokumentasi Vue</a>
      </div>
    </div>
  </footer>
</template>
