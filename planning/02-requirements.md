# Company Profile — Requirements (SRS) & Scope

## A. Kebutuhan Fungsional (User Stories)

### Halaman Publik
- Sebagai pengunjung, saya bisa melihat **beranda** (hero, ringkasan layanan,
  highlight portofolio, ajakan menghubungi).
- Sebagai pengunjung, saya bisa membuka halaman **Tentang** (profil, visi-misi,
  tim/nilai perusahaan).
- Sebagai pengunjung, saya bisa melihat daftar **Layanan**.
- Sebagai pengunjung, saya bisa melihat **Portofolio/Proyek** (dan detailnya).
- Sebagai pengunjung, saya bisa membuka halaman **Kontak** (alamat, peta/embed,
  info kontak) dan mengirim pesan lewat form.

### Form Kontak
- Sebagai pengunjung, saya bisa mengirim pesan (nama, email, subjek, isi).
- Sistem memvalidasi input & menyimpan pesan.
- Sistem memberi umpan balik sukses/gagal.

### Admin (pengelola)
- Sebagai admin, saya bisa login.
- Sebagai admin, saya bisa CRUD **layanan** (judul, deskripsi, ikon/gambar, urutan).
- Sebagai admin, saya bisa CRUD **portofolio** (judul, deskripsi, gambar, kategori/
  klien, link, urutan).
- Sebagai admin, saya bisa mengubah **info perusahaan** (nama, tagline, alamat,
  email, telepon, sosial media) lewat pengaturan.
- Sebagai admin, saya bisa melihat daftar **pesan kontak** & menandai sudah dibaca.

## B. Kebutuhan Non-Fungsional
- **Kualitas tampilan:** desain profesional, konsisten, responsif (mobile-first).
- **SEO:** metadata per halaman (title, description), Open Graph, URL ramah,
  sitemap & robots.txt, struktur heading semantik.
- **Performa:** waktu muat cepat, gambar dioptimalkan (Next Image), skor
  Lighthouse baik.
- **Aksesibilitas:** kontras cukup, alt text gambar, navigasi keyboard.
- **Keamanan:** area admin terproteksi; form kontak dengan rate limit & anti-spam
  dasar; input tervalidasi.
- **Konsistensi:** respons API `{ success, message, data }`.

## C. Scope & MVP

### Masuk MVP
- Halaman publik: Beranda, Tentang, Layanan, Portofolio (+ detail), Kontak
- Form kontak -> simpan pesan + notifikasi sukses
- Admin login
- CRUD layanan & portofolio
- Pengaturan info perusahaan
- Daftar & baca pesan kontak (tandai dibaca)
- SEO dasar (metadata, sitemap, robots)

### Ditunda (out of scope MVP)
- Blog/artikel (itu domain proyek CMS — hindari tumpang tindih)
- Multi-bahasa (i18n)
- Editor WYSIWYG untuk konten halaman
- Notifikasi email otomatis saat ada pesan masuk (nice to have)
- Manajemen banyak user/role (cukup satu admin)
- Analitik bawaan (cukup integrasi pihak ketiga seperti GA bila perlu)

> Catatan: kekuatan proyek ini adalah **kualitas front-end + SEO + kecepatan**,
> bukan kompleksitas logika. Itu yang diprioritaskan.
