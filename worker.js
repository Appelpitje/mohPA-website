export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isMarketingHost = url.hostname === 'mohpa.net' || url.hostname === 'www.mohpa.net';

    // Do not redirect previews, local development, or unrelated custom domains.
    if (isMarketingHost && (
      url.protocol !== 'https:' || url.hostname !== 'mohpa.net' || url.pathname === '/index.html'
    )) {
      url.protocol = 'https:';
      url.hostname = 'mohpa.net';
      url.port = '';
      if (url.pathname === '/index.html') url.pathname = '/';
      return Response.redirect(url.href, 308);
    }

    // Disable automatic HTML redirects on other hosts; serve the homepage internally.
    let assetRequest = request;
    if (url.pathname === '/') {
      url.pathname = '/index.html';
      assetRequest = new Request(url, request);
    }
    const response = await env.ASSETS.fetch(assetRequest);
    if (url.pathname.startsWith('/_assets/') && (response.ok || response.status === 304)) {
      const cached = new Response(response.body, response);
      cached.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      return cached;
    }
    return response;
  },
};
