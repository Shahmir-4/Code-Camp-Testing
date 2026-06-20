# Coding Camp Website

A landing + sign-up page for a coding camp, built with **Vite + React +
Tailwind CSS v4**. Monochrome theme with a lime accent, scroll-triggered
animations, a curriculum section styled like a commit log, and a sign-up
form that writes directly to a Google Sheet — no backend required.

## What's inside

- `src/components/Hero.jsx` — landing headline + CTA
- `src/components/Stats.jsx` — quick credibility stats
- `src/components/Program.jsx` — what the camp covers
- `src/components/Curriculum.jsx` — week-by-week breakdown (commit-log style)
- `src/components/Pricing.jsx` — fee with discount applied
- `src/components/Signup.jsx` — the sign-up form (→ Google Sheet)
- `src/components/FAQ.jsx` — objection-handling before sign-up
- `src/components/ViewerTicker.jsx` — bottom bar, randomized "viewers" count
- `src/components/Nav.jsx`, `Footer.jsx` — chrome

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it gives you (usually `http://localhost:5173`).

## Before you deploy

1. **Connect the form to your Google Sheet.** Follow
   `SETUP_GOOGLE_SHEET.md` — takes about 5 minutes.
2. Update the copy in `Hero.jsx`, `Pricing.jsx`, and `Curriculum.jsx` with
   your camp's real details, dates, and price.
3. Optionally swap the lime accent (`--color-lime` in `src/index.css`) for
   your own brand color.

## Deploying

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

Then import the repo on vercel.com — it auto-detects Vite and deploys with
zero config.

## Tech

- Vite 8 + React 19
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file)
- Framer Motion for scroll-reveal and FAQ accordion animations
