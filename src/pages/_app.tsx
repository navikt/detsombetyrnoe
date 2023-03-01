import "intersection-observer";
import React from "react";
import Head from "next/head";
import * as Sentry from "@sentry/browser";
import { AmplitudeProvider } from "../contexts/amplitude-context";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import useScrollToHashOnPageLoad from "../utils/useScrollToHashOnPageLoad";
import { Typografi } from "../styles/TypografiNyttDesign";
import { useMount } from "react-use";
import { isProduction } from "../utils/environment";

function App({ Component, pageProps }: any) {
  useMount(() => {
    if (isProduction()) {
      Sentry.init({
        dsn: "https://6b33671ec1d8407081cd639c6eafcea6@sentry.gc.nav.no/67",
        autoSessionTracking: false,
      });
    }
  });
  useScrollToHashOnPageLoad();

  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Typografi />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content="NAV IT" />
        <meta property="og:url" content="https://www.detsombetyrnoe.no/" />
        <link href="https://www.nav.no/dekoratoren/media/favicon.ico" rel="icon" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <AmplitudeProvider>
        <Component {...pageProps} />
      </AmplitudeProvider>
    </>
  );
}

export default App;
