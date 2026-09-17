export async function onRequest({ request, next }) {
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

  // Let Pages serve assets and its real static 404, never rewrite unknown paths.
  const response = await next();
  if (url.pathname.startsWith('/_assets/') && (response.ok || response.status === 304)) {
    // _headers does not cover Function-generated responses; retain the same policy here.
    const cached = new Response(response.body, response);
    cached.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return cached;
  }
  return response;
}
