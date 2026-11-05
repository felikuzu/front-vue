<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()
const appName = import.meta.env.VITE_APP_NAME || 'Vue Starter'

watch(() => route.path, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="site-header">
    <div class="container nav-wrap">
      <RouterLink class="brand" to="/" aria-label="Ke halaman beranda">
        <span class="brand-mark">V</span>
        <span>{{ appName }}</span>
      </RouterLink>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Buka menu navigasi"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav :class="['navigation', { open: menuOpen }]" aria-label="Navigasi utama">
        <RouterLink to="/">Beranda</RouterLink>
        <RouterLink to="/tentang">Tentang</RouterLink>
        <a class="button button-small" href="mailto:halo@example.com">Hubungi kami</a>
      </nav>
    </div>
  </header>
</template>
