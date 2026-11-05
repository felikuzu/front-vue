# Folder `src`

Folder ini berisi seluruh source code utama aplikasi Vue.

## Isi folder

- `main.js` — entry point aplikasi. File ini membuat instance Vue, memasang plugin seperti Vue Router, lalu me-mount aplikasi ke elemen `#app`.
- `App.vue` — komponen root yang menjadi kerangka utama aplikasi, termasuk header, konten halaman, dan footer.
- `assets/` — stylesheet, gambar, font, dan aset lain yang diproses oleh Vite.
- `components/` — komponen antarmuka yang dapat digunakan kembali.
- `router/` — konfigurasi navigasi dan daftar route aplikasi.
- `views/` — komponen yang merepresentasikan halaman penuh.

## Panduan

Semua kode aplikasi sebaiknya ditempatkan di dalam folder ini. Gunakan nama file komponen dalam format `PascalCase`, misalnya `ProductCard.vue`.
