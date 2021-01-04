import { AmplitudeProvider } from "../contexts/amplitude-context";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import Metadata from "../components/Metadata";
import React from "react";
import useScrollToHashOnPageLoad from "../utils/useScrollToHashOnPageLoad";

function App({ Component, pageProps }: any) {
  useScrollToHashOnPageLoad();

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

export default App;
