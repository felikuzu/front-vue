# Folder `router`

Folder ini diperuntukkan bagi konfigurasi Vue Router yang mengatur navigasi antarhalaman tanpa melakukan reload penuh pada browser.

## Isi saat ini

- `index.js` — membuat instance router, mendefinisikan daftar route, mengatur scroll behavior, dan memperbarui judul halaman.

## Menambahkan halaman baru

Tambahkan route baru pada array `routes` di `index.js`:

```js
{
  path: '/layanan',
  name: 'services',
  component: () => import('../views/ServicesView.vue'),
  meta: { title: 'Layanan' },
}
```

Kemudian buat komponen halaman yang sesuai di dalam folder `src/views`.

Gunakan lazy import seperti contoh di atas agar kode halaman dapat dipisahkan menjadi bundle tersendiri ketika production build dibuat.
