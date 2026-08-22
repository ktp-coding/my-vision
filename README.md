# My Vision · The Trader's Plan

หน้าเว็บส่วนตัวสำหรับบันทึกเป้าหมายการเทรด — บ้าน, รถ, ธุรกิจ, รายได้ — เพื่อรักษาแพชชั่นและวินัย

## Phase 1 · Front-only

- ไม่มี backend, ไม่มี auth — เก็บข้อมูลใน `localStorage`
- เป้าหมายเป็น recursive tree (parent/child) รองรับการ nest ไม่จำกัดความลึก
- Deploy static ได้ (Vercel/Netlify)

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 3
- Zustand + `persist` middleware
- Fonts: Trirong · IBM Plex Sans Thai · JetBrains Mono (Google Fonts)

## เริ่มใช้งาน

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## โครงสร้าง

```
app/
  layout.tsx        # fonts, metadata
  globals.css       # design tokens
  page.tsx          # overview (root goals)
  g/[id]/page.tsx   # focus mode (single goal + children)
  not-found.tsx
components/
  Header, Hero, StatStrip, Rules
  GoalCard          # recursive-safe card
  PriceDisplay      # รองรับ range 9.5–11.9M
  RefList           # link chips + strip UTM
  StatusBadge       # idea → acquired
  ProgressBar
  Breadcrumb
lib/
  types.ts          # Goal, GoalStatus, GoalRef
  store.ts          # Zustand + localStorage
  selectors.ts      # rollup, breadcrumb, descendants (flat parentId model)
  format.ts         # money, URL, favicon
  seed.ts           # ข้อมูลตั้งต้นจากรูป tree
```

## Data model

Flat + `parentId` (ไม่ nested) — ย้ายเข้า Postgres phase 2 ได้ทันที ไม่ต้อง refactor

## Phase 2 (อนาคต)

- Supabase (Postgres + RLS + Auth)
- Sync กำไรจริงจาก broker (webhook หรือ end-of-day)
- Mobile (Expo, share types ผ่าน monorepo)

ดู `trading-goals.html` สำหรับ prototype แบบ single-file
