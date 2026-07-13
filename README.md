# Executive Harmony

Aplikasi web responsif dan robust dengan performa tinggi untuk manajemen eksekutif.

**Bahasa / Languages:** 🇮🇩 Bahasa Indonesia | 🇬🇧 English (Coming soon)

---

## 🚀 Fitur Utama

- **R3SPONSIVE** - Desain yang sempurna di semua perangkat (mobile, tablet, desktop)
- **ROBUST** - Arsitektur yang stabil dan reliable untuk produksi
- **360° Coverage** - Solusi komprehensif untuk semua kebutuhan
- **Lazy Loading** - Pemuatan optimasi untuk performa maksimal
- **Parallax Interaktif** - Efek visual Minilla parallax yang memukau

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Routing:** TanStack Router
- **State Management:** TanStack Query (React Query)
- **UI Components:** Radix UI
- **Styling:** Tailwind CSS 4
- **Forms:** React Hook Form + Zod
- **Runtime:** Bun (Package Manager & Runtime)
- **Build Tool:** Vite 8
- **Language:** TypeScript

---

## ⚙️ Instalasi

### Prerequisites
- [Bun](https://bun.sh) - Package manager dan JavaScript runtime
- Node.js 18+ (alternatif untuk npm/yarn)

### Setup Project

```bash
# Clone repository
git clone https://github.com/onem74/executive-harmony.git
cd executive-harmony

# Install dependencies dengan Bun
bun install

# Jalankan development server
bun dev

# Build untuk production
bun build

# Preview production build
bun preview
```

---

## 📁 Struktur Project

```
executive-harmony/
├── src/
│   ├── routes/          # File-based routing (TanStack Router)
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── styles/          # Global styles & Tailwind config
├── public/              # Static assets
├── components.json      # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite build configuration
└── package.json         # Project dependencies
```

---

## 🚦 Development

### Perintah yang Tersedia

```bash
# Development
bun dev              # Jalankan dev server dengan HMR

# Production
bun build            # Build production
bun build:dev        # Build dengan mode development
bun preview          # Preview production build

# Code Quality
bun lint             # Jalankan ESLint
bun format           # Format code dengan Prettier
```

### File-Based Routing

Proyek ini menggunakan TanStack Router dengan file-based routing:

| File | URL |
|------|-----|
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/$id.tsx` | `/users/:id` |
| `posts/{-$category}.tsx` | `/posts/:category?` |
| `__root.tsx` | Root layout (app shell) |

---

## 🎨 Komponen UI

Menggunakan shadcn/ui + Radix UI:

- Dialog, Modal, Alert
- Form Controls (Input, Checkbox, Radio, Select, etc.)
- Data Display (Table, Accordion, Tabs)
- Navigation (Navigation Menu, Menubar, Dropdown)
- Dan lebih banyak lagi...

---

## 🌐 Live Demo

[Executive Harmony - Live Demo](https://trenzid.vercel.app)

---

## 📄 Lisensi

MIT License - Lihat file LICENSE untuk detail lengkap.

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat issue atau pull request.

---

## 📞 Kontak

Untuk pertanyaan atau saran, hubungi:
- GitHub: [@onem74](https://github.com/onem74)
- Repository: [executive-harmony](https://github.com/onem74/executive-harmony)

---

**Made with ❤️ by onem74**
