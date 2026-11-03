# Company Profile — Roadmap & Risks

## Milestones / Roadmap (estimasi solo developer)

| # | Milestone                        | Output                								| Estimasi |
| - | -------------------------------- | ------------------------------------------------- | -------- |
| 0 | Setup proyek                     | Backend & frontend dari skeleton, env, DB         | 0.5 hari |
| 1 | Auth admin                       | Login/refresh, guard admin, seed akun admin       | 0.5 hari |
| 2 | Company settings                 | Model + endpoint + form pengaturan                | 0.5 hari |
| 3 | Services (CRUD)                  | Admin CRUD + tampil di publik                     | 1 hari   |
| 4 | Portfolio (CRUD + detail)        | Admin CRUD + halaman daftar & detail publik       | 1.5 hari |
| 5 | Form kontak + pesan              | Endpoint simpan + rate limit + admin baca pesan   | 1 hari   |
| 6 | Halaman publik & desain          | Beranda, Tentang, Layanan, Portofolio, Kontak — desain profesional & responsif | 2.5 hari |
| 7 | SEO & performa                   | Metadata, OG, sitemap, robots, optimasi gambar    | 1 hari   |
| 8 | Data dummy & polish              | Konten contoh realistis, polish akhir             | 0.5 hari |
| 9 | Deploy + README + studi kasus    | Online, dokumentasi, skor Lighthouse              | 1 hari   |

**Total estimasi kasar: ~10 hari kerja** (sebagian besar untuk kualitas tampilan
& SEO, bukan logika).

## Definition of Done (per fitur)
- Halaman publik responsif, cepat, metadata lengkap.
- Endpoint admin terproteksi; form kontak tervalidasi & rate-limited.
- Konten dinamis (layanan/portofolio/settings) benar-benar dari API, bukan hardcode.
- Build frontend sukses; skor Lighthouse (Performance/SEO) baik.

## Risks & Assumptions

### Risiko
| Risiko                                      | Dampak | Mitigasi                                          |
| ------------------------------------------- | ------ | ------------------------------------------------- |
| Spam via form kontak                        | Sedang | Rate limit + honeypot + validasi ketat            |
| Tumpang tindih dengan proyek CMS            | Rendah | Batasi scope: tanpa blog/artikel di sini          |
| Desain terlihat generik                     | Sedang | Investasi waktu di tata letak, tipografi, spacing  |
| SEO tidak optimal karena render client-only | Sedang | Render halaman publik via SSR/SSG (Next)          |
| Manajemen gambar (upload) melebar           | Rendah | MVP pakai URL gambar; upload cloud = peningkatan   |

### Asumsi
- Satu admin pengelola (tanpa multi-user/role kompleks).
- Konten halaman "Tentang" relatif statis (boleh sebagian hardcode + sebagian
  dari settings).
- Gambar via URL untuk MVP (belum perlu storage).
- Tanpa notifikasi email otomatis pada MVP (admin cek pesan di dashboard).

## Artefak Planning yang Dihasilkan (checklist)
- [x] 01 Overview / Vision
- [x] 02 Requirements (SRS) & Scope/MVP
- [x] 03 Roles & Permissions
- [x] 04 Data Model / ERD
- [x] 05 API Contract
- [x] 06 Architecture & User Flows
- [x] 07 Roadmap & Risks
