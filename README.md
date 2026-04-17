# Lahiru Jayasuriya – Portfolio

A modern, deploy-ready portfolio web application built with **Next.js 14** (App Router) + **TypeScript**.

## 🚀 Quick Start

```bash
cd portfolio-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## ☁️ Deploy on Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Click **Deploy** — zero config needed

## 📁 Structure

```
app/
├── components/        # All page sections
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── GitHubStats.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── profile.ts     # Centralized profile data
├── globals.css        # Design system
├── layout.tsx
└── page.tsx
```

## ✏️ Customization

All personal data lives in `app/data/profile.ts` — edit it to update any information across the whole site.
