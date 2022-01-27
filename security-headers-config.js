const csp = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "*.vimeocdn.com"],
  "style-src": ["'self'", "blob:", "'unsafe-inline'", "fonts.googleapis.com", "*.vimeocdn.com"],
  "connect-src": ["'self'", "*.amplitude.com", "cdn.sanity.io", "*.api.sanity.io", "vitals.vercel-insights.com"],
  "font-src": ["'self'", "data:", "fonts.gstatic.com"],
  "frame-src": ["'self'", "player.vimeo.com"],
  "img-src": ["'self'", "data:", "cdn.sanity.io", "www.nav.no"],
};

const stringifiedCSP = Object.entries(csp)
  .map((entry) => `${entry[0]} ${entry[1].join(" ")}`)
  .join("; ");

const headers = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: stringifiedCSP,
  },
];

module.exports = headers;
