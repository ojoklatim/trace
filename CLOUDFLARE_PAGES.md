# Deploying to Cloudflare Pages

This project is configured to build as a fully prerendered static site for Cloudflare Pages.

## Build settings (Cloudflare Pages dashboard)

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist/client` |
| Node version env var | `NODE_VERSION=22` |

> **Important:** Set `NODE_VERSION=22` in Settings → Environment Variables (both Production and Preview).
> Vite 7 requires Node >=22.12.0 and will fail on older versions.

## What's configured

- **`vite.config.ts`** — TanStack Start with `cloudflare: false` (static output, no Worker) and prerendering enabled so every route is emitted as static HTML at build time.
- **`public/_routes.json`** — Tells Pages to serve all routes as static assets (no Worker invocation).
- **`public/_headers`** — Long-term caching for hashed assets and security headers.
- **`.node-version`** — Pins Node 22 for local development.
- **`package.json` engines** — Declares `>=22.12.0` requirement so CI/CD tooling enforces the correct version.

## Local verification

```bash
npm install
npm run build
npx serve dist/client
```

Open the printed URL — every route should load directly without a server.

## Notes

- Do **NOT** add server functions (`createServerFn`) or loaders that fetch at request time — they require a Worker runtime and will break the static build.
- All data must be either bundled at build time or fetched client-side via `fetch` from the browser.
- This project uses **npm** (not bun). Do not add `bun.lockb` or `bunfig.toml` — Cloudflare Pages will detect `bun.lockb` and switch to bun, which breaks the build.
