# Company Profile — Data Model / ERD

## Entitas (sederhana, minim relasi)

```
User (admin)        — akun pengelola
Service             — daftar layanan
Portfolio           — daftar proyek/karya
ContactMessage      — pesan dari form kontak
CompanySetting      — info perusahaan (umumnya satu baris / key-value)
```

Relasi minim karena ini situs profil. Entitas sebagian besar berdiri sendiri.
(Opsional: Portfolio bisa punya `category` sebagai kolom string sederhana,
tanpa tabel terpisah, untuk menjaga MVP ramping.)

## Diagram ER (teks)

```
+----------------+     +------------------+     +---------------------+
|     User       |     |     Service      |     |     Portfolio       |
+----------------+     +------------------+     +---------------------+
| id (PK)        |     | id (PK)          |     | id (PK)             |
| name           |     | title            |     | title               |
| email (unique) |     | description      |     | description         |
| password       |     | icon (nullable)  |     | imageUrl (nullable) |
| role (admin)   |     | sortOrder        |     | category (string)   |
| timestamps     |     | isActive         |     | clientName (null)   |
+----------------+     | timestamps       |     | projectUrl (null)   |
                       +------------------+     | sortOrder           |
                                                | isActive            |
+---------------------------+                   | timestamps          |
|     ContactMessage        |                   +---------------------+
+---------------------------+
| id (PK)                   |   +----------------------------+
| name                      |   |     CompanySetting         |
| email                     |   +----------------------------+
| subject (nullable)        |   | id (PK)                    |
| message                   |   | companyName                |
| isRead (bool, default F)  |   | tagline                    |
| createdAt                 |   | about (text)               |
+---------------------------+   | address, phone, email      |
                                | socials (JSON/kolom2)      |
                                | updatedAt                  |
                                +----------------------------+
```

## Definisi Tabel

### services
| id (PK) | title (not null) | description (text) | icon (string, null) |
| sortOrder (int, default 0) | isActive (bool, default true) | timestamps |

### portfolios
| id (PK) | title (not null) | description (text) | imageUrl (string, null) |
| category (string, null) | clientName (string, null) | projectUrl (string, null) |
| sortOrder (int, default 0) | isActive (bool, default true) | timestamps |

### contact_messages
| id (PK) | name (not null) | email (not null) | subject (null) |
| message (text, not null) | isRead (bool, default false) | createdAt |

### company_settings
| id (PK) | companyName | tagline | about (text) | address | phone | email |
| socials (JSON atau kolom terpisah: instagram, linkedin, dll) | updatedAt |
> Umumnya hanya ada SATU baris (singleton). Admin meng-update baris ini.

### users
| id (PK) | name | email (unique) | password (hash) | role (admin) | timestamps |

## Aturan Data
- `sortOrder` mengatur urutan tampil layanan/portofolio di halaman publik.
- `isActive=false` menyembunyikan item dari publik tanpa menghapusnya.
- Query publik hanya menampilkan item `isActive=true`, diurutkan `sortOrder`.
- `company_settings` di-seed satu baris default saat setup.
- Indeks ringan: `services.sortOrder`, `portfolios.sortOrder`,
  `contact_messages.createdAt`.

## Catatan Desain (gambar/upload)
- Untuk MVP, `imageUrl`/`icon` disimpan sebagai URL (mis. gambar diletakkan di
  folder publik atau layanan gambar pihak ketiga). Upload file ke cloud storage
  adalah peningkatan opsional, bukan MVP, agar fokus ke kualitas tampilan dulu.
