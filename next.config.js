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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
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
