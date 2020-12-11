import { AmplitudeProvider } from "../contexts/amplitude-context";
import "../styles/globals.css";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import Metadata from "../components/Metadata";
import React from "react";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Metadata />
      <AmplitudeProvider>
        <Component {...pageProps} />
      </AmplitudeProvider>
    </>
  );
}

export default MyApp;
