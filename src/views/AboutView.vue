<template>
  <section class="page-hero">
    <div class="container narrow">
      <span class="eyebrow">Tentang boilerplate</span>
      <h1>Fondasi sederhana untuk ide yang besar.</h1>
      <p>
        Project ini menggunakan Vue 3 Composition API, Vue Router, dan Vite.
        Strukturnya sengaja dibuat minimal agar mudah disesuaikan untuk berbagai kebutuhan.
      </p>
    </div>
  </section>
  <section class="section">
    <div class="container narrow prose">
      <h2>Struktur yang mudah dikembangkan</h2>
      <p>
        Simpan komponen reusable di <code>src/components</code>, halaman di
        <code>src/views</code>, dan konfigurasi rute di <code>src/router</code>.
        Variabel environment dapat ditambahkan melalui file <code>.env</code>.
      </p>
      <RouterLink class="text-link" to="/">← Kembali ke beranda</RouterLink>
    </div>
  </section>
</template>
