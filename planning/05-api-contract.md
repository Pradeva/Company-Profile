# Company Profile — API Contract (REST)

Format respons: `{ success, message, data }`. Auth admin: `Authorization: Bearer <token>`.

## Auth (admin saja)
| Method | Path             | Auth | Deskripsi       |
| ------ | ---------------- | ---- | --------------- |
| POST   | `/users/login`   | —    | Login admin     |
| POST   | `/users/refresh` | —    | Refresh token   |
| POST   | `/users/logout`  | —    | Logout          |

> Tidak ada endpoint register publik (akun admin dibuat saat setup).

## Public (tanpa auth)
| Method | Path                | Deskripsi                                   |
| ------ | ------------------- | ------------------------------------------- |
| GET    | `/company`          | Info perusahaan (nama, tagline, kontak, dll)|
| GET    | `/services`         | Daftar layanan aktif (urut sortOrder)       |
| GET    | `/portfolios`       | Daftar portofolio aktif (urut sortOrder)    |
| GET    | `/portfolios/:id`   | Detail portofolio                           |
| POST   | `/contact`          | Kirim pesan kontak (rate limited)           |

### Body `POST /contact`
```json
{ "name": "Budi", "email": "budi@mail.com", "subject": "Kerja sama", "message": "..." }
```

## Admin — Services
| Method | Path             | Auth  |
| ------ | ---------------- | ----- |
| POST   | `/services`      | admin |
| PUT    | `/services/:id`  | admin |
| DELETE | `/services/:id`  | admin |

## Admin — Portfolios
| Method | Path               | Auth  |
| ------ | ------------------ | ----- |
| POST   | `/portfolios`      | admin |
| PUT    | `/portfolios/:id`  | admin |
| DELETE | `/portfolios/:id`  | admin |

## Admin — Company Settings
| Method | Path        | Auth  | Deskripsi                       |
| ------ | ----------- | ----- | ------------------------------- |
| PUT    | `/company`  | admin | Ubah info perusahaan (singleton)|

## Admin — Contact Messages
| Method | Path                    | Auth  | Deskripsi                 |
| ------ | ----------------------- | ----- | ------------------------- |
| GET    | `/contact-messages`     | admin | Daftar pesan (paginasi)   |
| GET    | `/contact-messages/:id` | admin | Detail pesan              |
| PATCH  | `/contact-messages/:id/read` | admin | Tandai sudah dibaca   |
| DELETE | `/contact-messages/:id` | admin | Hapus pesan               |

### Catatan Validasi & Anti-spam
- `POST /contact`: validasi nama/email/message; rate limit ketat per IP;
  honeypot field (diabaikan jika terisi) untuk cegah bot.
- Endpoint publik GET hanya mengembalikan item `isActive=true`.
