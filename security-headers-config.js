const csp = {
  "default-src": ["'self'"],
  "script-src": [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "*.vimeocdn.com",
    "https://cdn.nav.no/team-researchops/sporing/sporing.js",
  ],
  "style-src": ["'self'", "blob:", "'unsafe-inline'", "fonts.googleapis.com", "*.vimeocdn.com"],
  "connect-src": [
    "'self'",
    "cdn.sanity.io",
    "*.api.sanity.io",
    "vitals.vercel-insights.com",
    "api.maptiler.com",
    "openmaptiles.github.io",
    "https://umami.nav.no/api/send",
  ],
  "font-src": ["'self'", "data:", "fonts.gstatic.com"],
  "frame-src": ["'self'", "player.vimeo.com"],
  "img-src": ["'self'", "data:", "cdn.sanity.io", "www.nav.no"],
  "media-src": ["'self'", "data:", "cdn.sanity.io"],
  "worker-src": ["'self'", "blob:"],
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
