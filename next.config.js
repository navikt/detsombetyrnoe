const securityHeaders = require("./security-headers-config");

const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination: process.env.NODE_ENV === "development" ? "http://localhost:3333/studio/:path*" : "/studio/index.html",
};

module.exports = {
  rewrites: () => [STUDIO_REWRITE],
  redirects: () => [
    {
      source: "/helenorge",
      destination: "/",
      permanent: false,
    },
  ],
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["no"],
    defaultLocale: "no",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
