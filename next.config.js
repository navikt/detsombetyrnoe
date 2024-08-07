const securityHeaders = require("./security-headers-config");

module.exports = {
  redirects: () => [
    {
      source: "/helenorge",
      destination: "/",
      permanent: false,
    },
  ],
  output: "standalone",
  productionBrowserSourceMaps: true,
  swcMinify: true,
  i18n: {
    locales: ["no"],
    defaultLocale: "no",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  compiler: {
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
