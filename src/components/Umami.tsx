"use client";

import Script from "next/script";
import { useCookieConsent } from "src/components/cookieConsent/CookieConsentContext";

export const Umami = () => {
  const context = useCookieConsent();

  if (!context.consentState.loaded || context.consentState.state !== "accepted") {
    return null;
  }

  return (
    <Script
      defer
      src="https://cdn.nav.no/team-researchops/sporing/sporing.js"
      data-host-url="https://umami.nav.no"
      data-website-id="93a6bd08-bd82-438d-bca5-cea0832e6778"
      data-exclude-search="true"
    />
  );
};
