<script setup>
const features = [
  { icon: '⚡', title: 'Cepat', text: 'Ditenagai Vite untuk pengalaman development dan build yang cepat.' },
  { icon: '🧩', title: 'Modular', text: 'Struktur komponen yang mudah dipahami, digunakan ulang, dan dikembangkan.' },
  { icon: '📱', title: 'Responsif', text: 'Tampilan nyaman digunakan mulai dari layar ponsel hingga desktop.' },
]
</script>

<template>
  <section class="hero">
    <div class="hero-glow hero-glow-one"></div>
    <div class="hero-glow hero-glow-two"></div>
    <div class="container hero-content">
      <span class="eyebrow">Vue 3 + Vite</span>
      <h1>Mulai website modern Anda dengan lebih cepat.</h1>
      <p class="hero-copy">
        Boilerplate yang bersih dan responsif, siap menjadi fondasi landing page,
        company profile, dashboard, atau produk digital berikutnya.
      </p>
      <div class="hero-actions">
        <a class="button" href="#fitur">Lihat fitur</a>
        <RouterLink class="button button-secondary" to="/tentang">Pelajari lebih lanjut</RouterLink>
      </div>
      <div class="browser-card" aria-label="Contoh tampilan aplikasi">
        <div class="browser-bar"><i></i><i></i><i></i></div>
        <div class="browser-body">
          <div class="preview-copy">
            <span>YOUR NEXT IDEA</span>
            <strong>Build something<br />remarkable.</strong>
            <div class="preview-button"></div>
          </div>
          <div class="preview-art"><div></div></div>
        </div>
      </div>
    </div>
  </section>

  <section id="fitur" class="section">
    <div class="container">
      <div class="section-heading">
        <span class="eyebrow">Fondasi yang solid</span>
        <h2>Semua yang Anda butuhkan untuk memulai</h2>
        <p>Fokus pada ide dan konten Anda. Struktur dasarnya sudah kami siapkan.</p>
      </div>
      <div class="feature-grid">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section cta-section">
    <div class="container cta-card">
      <div>
        <span class="eyebrow eyebrow-light">Siap dikembangkan</span>
        <h2>Ubah boilerplate ini menjadi milik Anda.</h2>
      </div>
      <a class="button button-light" href="mailto:halo@example.com">Mulai sekarang</a>
    </div>
  </section>
</template>
