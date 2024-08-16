import { AmplitudeProvider } from "src/contexts/amplitude-context";
import "/src/app/(site)/globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { Metadata, Viewport } from "next";
import { Footer } from "src/components/footer/Footer";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { getMetaData } from "src/lib/services/sanity/model/metadata/metadataQuery";

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
  return (
    <html lang="nb">
      <head>
        <link href="https://www.nav.no/dekoratoren/media/favicon.ico" rel="icon" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600&display=swap"
        />
      </head>
      <body>
        {draftMode().isEnabled && (
          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
        )}
        <AmplitudeProvider>
          {children}
          <Footer
            tittel={metadata.privacyArticle.tittel}
            slug={metadata.privacyArticle.slug}
            backgroundColor={forside?.bakgrunnsfarge}
            lysTekst={forside?.lysTekst}
          />
        </AmplitudeProvider>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
