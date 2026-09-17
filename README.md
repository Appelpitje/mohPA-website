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

Deploy to **Cloudflare Pages**:

- **Git integration**: Set the root directory to `marketing`, build command to `npm run build`, and output directory to `dist`.
- **Wrangler**: Run `npx wrangler pages deploy dist` from `marketing` after building so the adjacent `functions/` directory is included.

Attach both `mohpa.net` and `www.mohpa.net` as Pages custom domains. `functions/_middleware.js` issues canonical **308 redirects** for HTTP, `www`, and `/index.html` on those domains, and preserves Pages' real **404** response for unknown paths rather than rewriting them to the homepage.

A plain static drag-and-drop upload does **not** deploy `functions/_middleware.js`, so it does not include those middleware redirects. Use Git integration or Wrangler for the complete deployment.

### Environment Variables

- `VITE_PORTAL_URL`: URL to the mohPA Player Management Portal (defaults to `https://portal.mohpa.net`).
- `VITE_API_URL`: URL to the master server backend API (defaults to `https://backend.mohpa.net`).

Build-time environment values support Vite modes: `npm run build -- --mode staging` loads the staging environment for both the client and prerender builds.
