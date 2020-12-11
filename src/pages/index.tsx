import Legacy from "../legacy/static-with-positions/Legacy";
import React from "react";
import Metadata from "../components/Metadata";
import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function Home() {
  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Metadata />
      <Legacy />
    </>
  );
}
