# Vue Website Boilerplate

Boilerplate website responsif menggunakan Vue 3, Vue Router, dan Vite.

## Menjalankan project

```bash
npm install
npm run dev
```

Build untuk production:

```bash
npm run build
npm run preview
```

## Struktur utama

- `src/components` — komponen yang dapat digunakan ulang
- `src/views` — halaman aplikasi
- `src/router` — konfigurasi routing
- `src/assets` — stylesheet dan aset statis
- `.env.example` — contoh variabel environment

Setiap folder di dalam `src` memiliki `README.md` sendiri yang menjelaskan fungsi, isi, dan panduan penggunaannya.

Salin `.env.example` menjadi `.env` untuk mengatur nama aplikasi dan URL API. Restart
development server setelah mengubah file `.env` agar nilai baru dimuat oleh Vite.
