import * as React from "react";
import styled from "styled-components";
import { ArtikkelI } from "./types";
import Error from "next/error";
import BlockContent from "../BlockContent";
import Head from "next/head";
import { cssVars } from "../../styles/cssVars";
import { fontSize } from "../../styles/TypografiNyttDesign";
import Header from "./Header";
import Footer from "./Footer";
import MainMedia from "./MainMedia";

interface Props {
  data: ArtikkelI;
}

const Style = styled.div`
  min-height: 100vh;
  padding: 4vmin 4vmin 30vmin;
  ${cssVars.contentMaxWidth}: 30rem;
  ${cssVars.layoutMaxWidth}: 50rem;
  max-width: var(${cssVars.layoutMaxWidth});
  margin: 0 auto;

  > * {
    margin-left: auto;
    margin-right: auto;
  }
`;

const H1 = styled.h1`
  margin-top: calc(2rem + 3vmin);
  margin-bottom: calc(1.5rem + 2vmin);
  ${fontSize.s2}
`;

const H2 = styled.h2`
  margin-top: calc(2rem + 3vmin);
  margin-bottom: calc(1.5rem + 2vmin);
  font-size: clamp(1.25rem, 8vmin, 3.15rem);
`;

const Ingress = styled.p`
  width: 100%;
  max-width: var(${cssVars.contentMaxWidth});
  font-size: 1.1rem;
  margin-bottom: calc(2rem + 3vmin);
`;

const StyledBlockContent = styled(BlockContent)`
  > * {
    width: 100%;
    max-width: var(${cssVars.contentMaxWidth});
    margin-left: auto;
    margin-right: auto;
  }

  margin-bottom: calc(5rem + 5vmin);
`;

function Artikkel(props: Props) {
  const artikkel = props.data;

  if (!artikkel) {
    return <Error statusCode={404} />;
  }

  const coverMedia = artikkel.bilder?.[0];

  return (
    <Style>
      <Head>
        <title>{artikkel.tittel}</title>
      </Head>
      <Header />
      <main>
        <H1>{artikkel.tittel}</H1>
        {artikkel.undertittel && <H2>{artikkel.undertittel}</H2>}
        <Ingress>{artikkel.ingress}</Ingress>
        <MainMedia {...coverMedia} />
        <StyledBlockContent blocks={artikkel.innhold} />
      </main>
      <Footer />
    </Style>
  );
}

export default Artikkel;
