# Company Profile — Arsitektur & User Flows

## Tech Stack
- **Backend:** Express (Express Modular Skeleton), Sequelize + PostgreSQL, JWT,
  Joi, Winston. Ringan: CRUD konten + pesan kontak.
- **Frontend:** Next.js (App Router) + React + Tailwind (Frontend Starter Kit).
  Memanfaatkan kekuatan Next untuk **SEO & performa**: metadata per halaman,
  `next/image`, dan (opsional) Server Components untuk halaman publik agar cepat
  & ramah SEO.
- **Deploy (rencana):** frontend Vercel (ideal untuk Next + SEO), backend
  Railway/Render, PostgreSQL Neon/Supabase.

## Catatan Rendering (penting untuk proyek ini)
Berbeda dari 3 proyek lain yang murni SPA client-side, Company Profile sebaiknya
memakai **rendering sisi server / static** untuk halaman publik:
- Halaman publik (beranda, tentang, layanan, portofolio) di-render di server
  (SSR/SSG) agar cepat dan terindeks mesin pencari.
- Area admin tetap client-side (butuh token). Ini kombinasi yang pas dengan Next.

## Diagram Arsitektur (teks)
```
[ Pengunjung / Google Bot ]
        |
[ Next.js (SSR/SSG halaman publik) ] --GET--> [ Express API ] --> [ PostgreSQL ]
        |  (metadata, OG, sitemap)                 - konten publik
[ Admin (client, ber-token) ] --REST--> [ Express API (admin, authorize) ]
```

## Struktur Modul Backend
```
modul: auth(users), company(settings), services, portfolios, contact(messages)
routes -> controllers -> services -> models
public GET endpoints (tanpa auth) + admin endpoints (authorize('admin'))
contact: rate limit + validasi + anti-spam (honeypot)
```

## Struktur Frontend
```
app/
  (public)/
    page.jsx              # Beranda
    about/page.jsx        # Tentang
    services/page.jsx     # Layanan
    portfolio/page.jsx    # Daftar portofolio
    portfolio/[id]/page   # Detail portofolio
    contact/page.jsx      # Kontak + form
  (admin)/
    login, dashboard, services, portfolios, settings, messages
  sitemap.js, robots.js   # SEO
features/ (services, portfolios, contact, settings)
components/ (layout publik: Navbar, Footer, Hero, SectionCards; ui; guards)
```

## User Flow 1: Pengunjung menilai & menghubungi
1. Buka beranda -> lihat hero, layanan unggulan, highlight portofolio.
2. Jelajahi halaman Layanan & Portofolio.
3. Buka Kontak -> isi form -> kirim -> dapat notifikasi "pesan terkirim".

## User Flow 2: Admin kelola konten
1. Login ke /admin.
2. Tambah/ubah layanan & portofolio (judul, deskripsi, gambar/URL, urutan, aktif).
3. Perbarui info perusahaan (alamat, kontak, sosial media).
4. Perubahan tampil di situs publik.

## User Flow 3: Admin baca pesan
1. Buka "Pesan" di dashboard -> daftar pesan masuk (terbaru dulu).
2. Buka pesan -> tandai sudah dibaca / hapus.

## SEO Checklist (bagian dari nilai jual)
- Title & meta description unik per halaman.
- Open Graph & Twitter Card untuk preview saat dibagikan.
- `sitemap.xml` & `robots.txt`.
- Heading semantik (satu H1 per halaman), alt text gambar.
- URL ramah (mis. `/portfolio/nama-proyek`).
- Gambar dioptimalkan via `next/image`.
