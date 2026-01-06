import { Metadata, Viewport } from "next";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { Footer } from "src/components/footer/Footer";
import { TrackingProvider } from "src/contexts/tracking-context";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { getMetaData } from "src/lib/services/sanity/model/metadata/metadataQuery";
import "./globals.css";
import "src/styles/variables.css";
import "src/styles/reset.css";
import "src/styles/global.css";
import "src/styles/typography.css";
import { CookieConsentProvider } from "src/components/cookieConsent/CookieConsentContext";
import { CookieConsentBanner } from "src/components/cookieConsent/CookieConsentBanner";
import { Umami } from "src/components/Umami";

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "NAV IT",
  openGraph: {
    siteName: "NAV IT",
    url: "https://www.detsombetyrnoe.no/",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const metadata = await getMetaData();
  const forside = await sanityFetch<{ bakgrunnsfarge: string; lysTekst: boolean }>({
    query: `*[_id == "forside"][0] {bakgrunnsfarge,lysTekst}`,
  });

  const isEnabled = (await draftMode()).isEnabled;
  return (
    <html lang="nb">
      <head>
        <link href="/faviconInnvikleren.ico" rel="icon" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600&display=swap"
        />
      </head>
      <body>
        {isEnabled && (
          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
        )}
        <CookieConsentProvider>
          <Umami />
          <TrackingProvider>
            <CookieConsentBanner />
            {children}
            <Footer
              tittel={metadata.privacyArticle.tittel}
              slug={metadata.privacyArticle.slug}
              backgroundColor={forside?.bakgrunnsfarge}
              lysTekst={forside?.lysTekst}
            />
          </TrackingProvider>
        </CookieConsentProvider>
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
