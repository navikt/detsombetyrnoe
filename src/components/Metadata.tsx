import * as React from "react";
import Head from "next/head";

function Metadata() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Tør du å skape det som betyr noe?" />
      <meta property="og:site_name" content="NAV IT" />
      <meta property="og:url" content="https://www.detsombetyrnoe.no/" />
      <meta
        property="og:description"
        content="NAV skal utvikle verdens beste velferdsløsninger - for deg og dine, for NAV og for samfunnet. Vi ser
                    etter mennesker som tør å ta det ansvaret."
      />
      <meta property="og:image" content="https://www.detsombetyrnoe.no/legacy/detsombetyrnoe.jpg" />
      <link href="https://www.nav.no/dekoratoren/media/favicon.ico" rel="icon" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,600;0,900;1,300;1,600&display=swap"
        rel="stylesheet"
      />
      <title>Tør du å skape det som betyr noe?</title>
    </Head>
  );
}

export default Metadata;
