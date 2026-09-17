# mohPA Marketing Website

The official marketing website and brand surface for **mohPA**—the community revival master server for Medal of Honor: Pacific Assault (2004).

## Features

- **Brand-Committed Visual Design**: Built using the official mohPA tactile palette (Khaki paper, Olive drab, Carbon ink, Stamp Carmine).
- **Live Server Browser**: Queries the community master server API for dedicated servers and available player counts, with game-mode filters and server address copying.
- **Honest Server Status**: Shows loading, unavailable, empty, and unknown-count states; retains the last successful roster with a warning if a refresh fails.
- **Client Patch Download**: Download the community client patch (`mohPA-Client-Patch.zip`) and follow the 3-step multiplayer setup guide.
- **Prerendered Content**: Build-time rendering provides crawlable content without JavaScript; client hydration adds live server updates and interactive controls.
- **Responsive**: Layouts adapt to desktop and mobile screens.

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Prerender & SEO

`npm run build` runs `tsc` and `scripts/build.mjs`. The script builds the Vite client, renders `src/App.tsx` through `src/entry-server.tsx` into `dist/index.html`, and fails the build on SSR errors or a missing/duplicated root mount. React hydrates the prerendered page in the browser.

`dist/` includes `robots.txt`, `sitemap.xml`, `404.html`, and `_headers`. Fingerprinted assets live under `/_assets/` with immutable caching; public artwork is not covered by that policy.

## Deployment

Deploy this repository with **Cloudflare Workers Builds**, not Pages:

- **Root directory**: `/` (this repository is the marketing site).
- **Production branch**: `main`.
- **Build command**: `npm run build`.
- **Deploy command**: `npx wrangler deploy`.
- **Non-production version command**: `npx wrangler versions upload`.

`wrangler.jsonc` deploys `worker.js` and the built `dist/` assets through the `ASSETS` binding. The default Worker name is `mohpa-website`; it must match the existing Workers Builds project name. No zone-wide routes are configured here.

Attach both `mohpa.net` and `www.mohpa.net` as **Worker custom domains**. The Worker runs before every asset request and issues canonical **308 redirects** only on these two hosts when the request is HTTP, uses `www`, or targets `/index.html`. Redirects preserve the path and query string, with `/index.html` mapped to `/`. Preview URLs, localhost, and unrelated hosts are not redirected. Automatic asset HTML redirects are disabled; `/` internally serves `index.html` without redirecting.

The asset binding serves unknown paths using `dist/404.html` with a real **404** status, never a SPA homepage fallback. Successful fingerprinted `/_assets/` responses (including conditional 304 responses) receive `Cache-Control: public, max-age=31536000, immutable`; other assets retain normal caching.

Do **not** enable zone-wide HTTPS redirects or add a wildcard Worker route: the legacy game backend must remain untouched. Custom domains direct all requests on the attached hostname to this Worker; keep any legacy paths requiring a separate origin outside that attachment/routing scope.

For local verification without deploying, run `npm run build`, then `npx wrangler deploy --dry-run` and `npx wrangler dev --local`. The dev server exercises the Worker and built assets, unlike Vite's development server.

`functions/_middleware.js` remains as the equivalent implementation for optional Pages deployments; Workers Builds does not execute it. `public/_headers` remains compatible with Pages and is also supported by current Workers static assets. The Worker explicitly sets immutable caching on successful fingerprinted asset responses rather than relying on `_headers` for Worker-generated responses.

### Environment Variables

- `VITE_PORTAL_URL`: URL to the mohPA Player Management Portal (defaults to `https://portal.mohpa.net`).
- `VITE_API_URL`: URL to the master server backend API (defaults to `https://backend.mohpa.net`).

Build-time environment values support Vite modes: `npm run build -- --mode staging` loads the staging environment for both the client and prerender builds.
