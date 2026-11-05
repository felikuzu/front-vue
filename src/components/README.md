# Folder `components`

Folder ini diperuntukkan bagi komponen Vue yang dapat digunakan kembali pada satu atau beberapa halaman.

## Contoh komponen

- Header dan footer
- Tombol khusus
- Navigation bar
- Card produk atau artikel
- Modal dan dialog
- Form field
- Loading indicator

Komponen yang tersedia saat ini:

- `SiteHeader.vue` — header dan navigasi utama website.
- `SiteFooter.vue` — footer website.

## Panduan

- Gunakan nama file `PascalCase`, misalnya `BaseButton.vue`.
- Buat komponen tetap fokus pada satu tanggung jawab.
- Gunakan `props` untuk menerima data dari parent.
- Gunakan `emit` untuk mengirim event kepada parent.
- Komponen yang hanya digunakan oleh satu halaman dan sangat spesifik boleh diletakkan dekat dengan halaman tersebut apabila struktur project berkembang.
