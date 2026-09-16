# mohPA Marketing Website

The official marketing website and brand surface for **mohPA**—the community revival master server for Medal of Honor: Pacific Assault (2004).

## Features

- **Brand-Committed Visual Design**: Built using the official mohPA tactile palette (Khaki paper, Olive drab, Carbon ink, Stamp Carmine).
- **100% Dynamic Live Server Browser**: Connects directly to the live master server API (`https://backend.mohpa.net/api/v1/servers`) to display active dedicated game servers, real player counts, ping, and one-click direct connect copy.
- **Client Patch Downloads**: Bundled zero-friction download of the automated runtime Winsock redirection hook (`mohPA-Client-Patch.zip`).
- **Tactile Onboarding**: 3-step deployment walkthrough from unpatched client to in-game multiplayer.
- **Responsive**: Fully responsive and tested across desktop (1440px) and mobile (390px) viewports.

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

## Deployment

The project builds to a standard static directory (`dist/`) that can be deployed to Cloudflare Pages, Vercel, Netlify, or Nginx.

### Environment Variables

- `VITE_PORTAL_URL`: URL to the mohPA Player Management Portal (defaults to `https://portal.mohpa.net`).
- `VITE_API_URL`: URL to the master server backend API (defaults to `https://backend.mohpa.net`).
