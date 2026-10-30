import { defineConfig, loadEnv } from 'vite';

function getSiteUrl(value: string | undefined): URL | null {
  if (!value?.trim()) return null;

  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    throw new Error('VITE_SITE_URL must be a complete http(s) site URL.');
  }

  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
    throw new Error('VITE_SITE_URL must use http(s), without credentials, query parameters or a hash.');
  }

  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url;
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');
  const siteUrl = getSiteUrl(env.VITE_SITE_URL);

  return {
    // Relative assets work both at a domain root and /repository/ on GitHub Pages.
    base: './',
    plugins: [{
      name: 'site-sharing-metadata',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          // Keep the local fallback relative until a confirmed public URL is known.
          if (!siteUrl) return html;

          const imageUrl = escapeAttribute(new URL('brand-mark.png', siteUrl).href);
          const canonicalUrl = escapeAttribute(siteUrl.href);
          return html
            .replace(/<meta\b[^>]*\bproperty=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${imageUrl}" />`)
            .replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n    <meta property="og:url" content="${canonicalUrl}" />\n  </head>`);
        },
      },
    }],
    build: {
      target: 'es2022',
    },
  };
});
