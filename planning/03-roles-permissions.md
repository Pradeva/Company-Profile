# Company Profile — Roles & Permissions

Peran: `admin` (pengelola). Registrasi publik TIDAK dibuka (ini situs profil,
bukan aplikasi ber-user banyak). Akun admin dibuat manual/awal.

## Matriks Hak Akses

| Aksi                                      | Publik | admin |
| ----------------------------------------- | :----: | :---: |
| Lihat semua halaman publik                |   ✓    |   ✓   |
| Kirim pesan via form kontak               |   ✓    |   ✓   |
| Login / Logout                            |   —    |   ✓   |
| CRUD layanan (services)                   |   —    |   ✓   |
| CRUD portofolio/proyek                    |   —    |   ✓   |
| Kelola info perusahaan (company settings) |   —    |   ✓   |
| Lihat & kelola pesan kontak               |   —    |   ✓   |

## Catatan Otorisasi
- Semua halaman profil dan form kontak bersifat publik (tanpa token).
- Endpoint tulis (CRUD konten, baca pesan) butuh login admin
  (`authMiddleware` + `authorize('admin')`).
- Karena hanya satu peran pengelola, otorisasi sederhana: admin-only untuk area
  pengelolaan. Tidak ada ownership antar-user.
- Form kontak publik sebaiknya diberi **rate limiting** & proteksi anti-spam
  dasar (mis. honeypot / verifikasi sederhana) untuk mencegah penyalahgunaan.
