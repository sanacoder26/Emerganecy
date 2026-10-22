# Emergency Plumber Keighley — 24/7 Plumbing & Heating

Single-page marketing site (TanStack Start, prerendered) for a 24/7 emergency plumbing,
boiler repair and heating service covering Keighley and nearby areas.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build targets Vercel and writes the Vercel Build Output API tree to `.vercel/output`:

- `.vercel/output/static/` — prerendered `index.html`, CSS/JS assets and images
- `.vercel/output/functions/` — serverless function for any request not served from disk
- `.vercel/output/config.json` — routing and cache rules

## Deploy to Vercel

### Option 1 — Git (recommended)

1. Push this repository to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Leave the defaults: `vercel.json` already sets the install and build commands
   (`npm install`, `npm run build`), and the framework preset is turned off because the
   build produces `.vercel/output` directly.
4. Click **Deploy**. Each push to the default branch publishes a new deployment.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel        # development preview
vercel --prod # production
```

No environment variables are required — the site is fully static and needs no backend.

### Custom domain

Add it in Vercel under **Project → Settings → Domains**, then point your DNS at Vercel.

## Notes

- The homepage is prerendered to HTML at build time, so the full text is in the served
  `index.html` for Google and social link previews.
- Every page in the navigation currently points back to the homepage; add new route files
  under `src/routes/` when real pages are needed, and list them in `pages` in
  `vite.config.ts` to have them prerendered too.
