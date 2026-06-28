# Дмитрий Бородин — Portfolio

Personal portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- **Icons**: Inline SVG (Tabler-style)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customisation

All content lives in **`lib/data.ts`** — edit that file to update:

- Your name, bio, contacts
- Work experience entries
- Tech stack groups
- Projects

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select the repo — Vercel auto-detects Next.js
4. Click **Deploy**

No environment variables required for the base setup.

## Project structure

```
portfolio/
├── app/
│   ├── globals.css       # Tailwind + Google Fonts import
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Entry point
├── components/
│   ├── Portfolio.tsx     # Main layout + section routing
│   ├── Sidebar.tsx       # Desktop sidebar with nav
│   ├── MobileNav.tsx     # Mobile top navigation
│   ├── HeroSection.tsx   # About + typewriter
│   ├── ExperienceSection.tsx
│   ├── StackSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
└── lib/
    └── data.ts           # ← All your content here
```
