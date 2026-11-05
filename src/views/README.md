# Folder `views`

Folder ini diperuntukkan bagi komponen Vue yang merepresentasikan sebuah halaman penuh dan biasanya terhubung langsung dengan route.

## Halaman yang tersedia

- `HomeView.vue` — halaman beranda.
- `AboutView.vue` — halaman tentang.
- `NotFoundView.vue` — halaman fallback untuk alamat yang tidak ditemukan.

## Perbedaan `views` dan `components`

- `views` digunakan untuk halaman yang dibuka melalui URL atau route.
- `components` digunakan untuk bagian antarmuka yang dapat dirangkai atau digunakan kembali di dalam halaman.

## Panduan

- Gunakan akhiran `View` pada nama file, misalnya `ContactView.vue`.
- Daftarkan halaman baru di `src/router/index.js`.
- Pecah bagian halaman yang kompleks menjadi komponen-komponen kecil di `src/components`.
- Hindari meletakkan konfigurasi route di dalam file halaman.
