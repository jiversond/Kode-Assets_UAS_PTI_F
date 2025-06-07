# 🛡️ Knight Adventure – 2D RPG Game (React)
---

## 👨‍💻 Anggota Kelompok

- Abraham Jiverson Dobiki
- Muhammad Rassya Khanaya Hartawan
- Raditya Agra

---

Knight Adventure adalah game 2D RPG top-down berbasis React di mana pemain menjelajahi dunia luas, menghadapi musuh, memulihkan stamina melalui fitur tidur, dan mengelola status karakter. Game ini dirancang ringan, interaktif, dan cocok untuk dimainkan di berbagai perangkat.

---

## 📜 Aturan Permainan – Knight Adventure

### 🧭 Overview

Knight Adventure adalah game role-playing 2D di mana Anda mengendalikan karakter (Captain, Knight, atau Mage) dalam dunia fantasi. Jelajahi berbagai area, lawan musuh, kelola sumber daya, dan naik level untuk menjadi petualang yang lebih kuat. Navigasikan dunia, bertahan dari tantangan, dan selesaikan misi untuk maju.

### 🎯 Tujuan Permainan

**Tujuan Utama**  
Naikkan level karakter Anda dengan mengalahkan musuh (Singa, Skeleton, Giant Spirit) di area tertentu (Dungeon atau Gunung).

**Tujuan Sekunder**  
Kelola kesehatan, rasa lapar, dan inventaris (koin emas, ikan) untuk bertahan hidup, jelajahi semua area (Peta Utama, Dungeon/Kuil, Pantai, Gunung), dan manfaatkan sistem waktu untuk beristirahat secara strategis.

### 🎮 Kontrol

- **Gerakan**: Gunakan tombol panah (Atas, Bawah, Kiri, Kanan) untuk menggerakkan karakter.
- **Serang**: Klik tombol pedang di pojok kanan bawah untuk menyerang musuh di dekat Anda.
- **Tidur**: Klik tombol Tidur (muncul pada malam hari di titik tertentu, misalnya koordinat 2315,650) untuk memulihkan kesehatan dan rasa lapar.
- **Navigasi**: Berinteraksi dengan area melalui pop-up (masuk Dungeon, Pantai, atau Gunung).
- **Keluar**: Klik tombol "Keluar ke Beranda" di kanan bawah untuk kembali ke menu utama.

### 🌍 Mekanisme Permainan

#### Sistem Area

Game memiliki empat area utama:

1. **Peta Utama (Beranda)**  
   - Ukuran 4000x4000 piksel.  
   - Titik awal permainan.  
   - Memiliki zona ke area lain, toko, dan titik tidur.

2. **Dungeon/Kuil**  
   - Area pertempuran.  
   - Musuh: Singa (Level 1+), Skeleton (Level 5+).  
   - Contoh: kalahkan 3 Singa untuk naik ke Level 2.

3. **Pantai**  
   - Area non-kombat.  
   - Toko untuk membeli ikan (memulihkan lapar).

4. **Gunung**  
   - Area pertempuran (terbuka di Level 5+).  
   - Musuh: Giant Spirit.  
   - Contoh: kalahkan 5 Giant Spirit untuk naik level.

Gunakan tombol “Kembali ke Peta Utama” di setiap area untuk kembali dan menyimpan status.

#### Statistik

- **Kesehatan (Max 5)**: Berkurang saat diserang atau saat lapar = 0.
- **Lapar (Max 5)**: Berkurang setiap 2 menit. Jika 0, kesehatan akan berkurang.
- **Level**: Naik setelah mengalahkan musuh sesuai jumlah target (misalnya 2*level + 1 Singa).
- **Game Over**: Jika kesehatan = 0, muncul modal Game Over dan kembali ke Peta Utama.

#### Aktivitas

- **Pertempuran**: Serang musuh dalam jarak 60 piksel. Musuh menjatuhkan koin emas.
- **Perdagangan**:
  - **Jual Koin**: Toko (X:510, Y:2100), jual 1 = 10 uang, 5 = 55 uang, semua = 10.5/u.
  - **Beli Ikan**: Toko di Pantai (X:1800, Y:1800), 1 ikan = 40 uang.
  - **Makan Ikan**: Klik ikon ikan untuk tambah 1 lapar (jika <5).
- **Tidur**: Hanya tersedia malam hari (18:00–05:59), pulihkan kesehatan dan lapar penuh, waktu maju ke 07:00.

#### Sistem Waktu

- **Jam Dalam Game**: Mulai 07:00, 1 detik nyata = 1 menit dalam game.
- **Malam**: 18:00–05:59, memungkinkan tidur dan tampilan gelap.
- **Ucapan Selamat**: Muncul di jam tertentu (misal, "Selamat Pagi" pukul 06:00).

#### Inventaris

- **Koin Emas**: Dari musuh, untuk dijual di toko.
- **Ikan**: Untuk memulihkan rasa lapar.
- Ditampilkan di panel status dengan jumlahnya.

#### Skor

- **Dungeon Level 1**: Target jumlah Singa (contoh 3/3).
- **Gunung**: Target jumlah Giant Spirit (contoh 2/5).
- Naik level akan mereset jumlah kill dan meningkatkan syarat kill.

#### Tips Bermain

- **Prioritaskan Lapar**: Jangan biarkan lapar = 0.
- **Strategi Serang**: Hindari diserang musuh sekaligus.
- **Gunakan Tidur**: Untuk pulihkan total setelah bertarung.
- **Simpan Progres**: Gunakan tombol “Simpan Status” saat kembali ke peta.
- **Naik Level**: Fokus kalahkan Singa di Dungeon untuk cepat naik ke Level 5.

#### Panel Status

Tampilan di kiri atas, menampilkan:

- Area aktif (contoh: "Di Dungeon Level 1")
- Koordinat karakter dan waktu dalam game
- Bar Kesehatan dan Lapar
- Level, Uang, Koin, Ikan
- Status musuh (di Dungeon/Gunung), termasuk bar darah dan jumlah kill

#### Keterbatasan Diketahui

- Skeleton kadang tidak menyerang di Level 5 (dalam pengembangan).
- UI bisa tumpang tindih di layar kecil, gunakan mode landscape.
- Tidak ada sistem simpan permanen (hanya simpan di Peta Utama).

### 🔰 Memulai

- Akses game melalui tautan host (TBD).
- Pilih karakter (Captain, Knight, Mage).
- Mulai petualangan di Peta Utama, dan jelajahi area lain!

Untuk masalah atau masukan, hubungi tim pengembang.

---
## 🎮 Fitur Utama

- 🔄 Gerakan karakter menggunakan keyboard  
- 👾 Musuh dengan AI pengejaran berbasis jarak  
- ⏰ Sistem waktu dinamis (siang–malam)  
- 💤 Fitur tidur untuk memulihkan stamina & health  
- 📍 Minimap untuk navigasi  
- 💰 Sistem ekonomi loot dan koin  
- 🗺️ Teleportasi antar zona (dungeon, danau, kuil, dll)  
---

## 🚀 Cara Menjalankan Proyek

```bash
cd folder
```

```bash
npm install
```

```bash
npm run dev/ npm start
```

> Pastikan Node.js versi 16+ sudah terinstal.

---
