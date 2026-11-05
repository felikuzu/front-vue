# Folder `assets`

Folder ini diperuntukkan bagi aset yang digunakan oleh aplikasi dan diproses oleh Vite ketika development atau build production berlangsung.

## Contoh isi

- File CSS global
- Gambar dan ilustrasi
- Font lokal
- Ikon
- File SVG yang diimpor dari JavaScript atau komponen Vue

Saat ini, `main.css` berisi style global, design tokens, layout, komponen umum, dan aturan responsive website.

## Panduan

Gunakan folder ini ketika aset perlu diimpor dari source code, misalnya:

```js
import logoUrl from './assets/logo.svg'
```

Aset yang harus tersedia secara langsung tanpa diproses Vite sebaiknya ditempatkan dalam folder `public/` apabila folder tersebut nantinya dibuat.
