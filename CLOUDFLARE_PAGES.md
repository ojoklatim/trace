# Deploying to Cloudflare Pages

This project is configured to build as a fully prerendered static site, ready for Cloudflare Pages.

## Build settings (in the Cloudflare Pages dashboard)

- **Framework preset**: None
- **Build command**: `npm run build`
- **Build output directory**: `dist/client`
- **Node version**: `20` (set env var `NODE_VERSION=20`)

## What's configured

- **`vite.config.ts`** enables TanStack Start prerendering (`prerender.enabled: true`, `crawlLinks: true`) so every route is emitted as static HTML at build time.
- **`public/_routes.json`** tells Pages to skip Functions and serve everything as static assets (no Worker invocation = faster + free tier friendly).
- **`public/_headers`** adds long-term caching for hashed assets and basic security headers.
- **SPA fallback**: Cloudflare Pages automatically serves `index.html` for unknown routes when `_routes.json` excludes Functions, so client-side navigation works.

## Local verification

```bash
npm run build
npx serve dist/client
```

Then open the printed URL — every route should load directly without a server.

## Notes

- Do NOT add server functions (`createServerFn`) or loaders that fetch at request time — they require a Worker runtime and will break the static build.
- All data must be either bundled at build time or fetched client-side via `fetch` from the browser.
