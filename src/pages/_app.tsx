import "intersection-observer";
import React from "react";
import Head from "next/head";
import * as Sentry from "@sentry/browser";
import { AmplitudeProvider } from "../contexts/amplitude-context";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import SEO from "../components/SEO";
import useScrollToHashOnPageLoad from "../utils/useScrollToHashOnPageLoad";

function App({ Component, pageProps }: any) {
  Sentry.init({ dsn: "https://6b33671ec1d8407081cd639c6eafcea6@sentry.gc.nav.no/67" });
  useScrollToHashOnPageLoad();

  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content="NAV IT" />
        <meta property="og:url" content="https://www.detsombetyrnoe.no/" />
        <link href="https://www.nav.no/dekoratoren/media/favicon.ico" rel="icon" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AmplitudeProvider>
        <Component {...pageProps} />
      </AmplitudeProvider>
    </>
  );
}

export default App;
